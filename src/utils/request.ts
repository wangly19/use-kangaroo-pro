
import { createElement } from 'react';
import { history } from 'umi'
import type { ResponseError } from 'umi-request';
import { extend } from 'umi-request';
import { notification, Modal, message as showMessage } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const codeMessage: Record<number, string> = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 显示通知弹窗
 * @param showParams 显示通知参数
 * @param api 当前标识
 */
export function showMessageNotificationHandler (
  showParams: API.CommonResult['showMessage'],
  api: string = ''
): void {
  /** @name 判断是否开启了通知描述显示 */
  if (showParams) {
    const {
      method,
      type,
      message,
      description,
    } = showParams
    switch (method) {
      /** @name 全局提示弹窗 */
      case 'message':
        showMessage[type](message)
        break;

      /** @name 通知提示弹窗 */
      case 'notification':
        notification[type]({
          message,
          description
        })
          break;
      default:
        throw new Error(`[ request ]: 接口约定了弹窗信息参数，但是未给出使用模型，请检测当前。${api}`)
    }
  }
}

/** 异常处理程序 */
function errorHandler (error: ResponseError<any> & {
  code?: string | number
}) {
  const { response, request } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }

  if (error.code && error.code === 5000) {
    // 上报出错人和token,
    throw new Error(`[fetch fail]: 接口请求失败，当前接口地址${request.url}`)
  }

  return Promise.reject(error) 
};

/**
 * 清除当前用户身份信息，并且跳转到登录页面
 */
function clearUserTraces () {
  Modal.confirm({
    title: '提示信息',
    icon: createElement(ExclamationCircleOutlined),
    content: '您当前设备信息已过期，可以取消继续留在该页面，或者重新登录。',
    okText: "登录",
    cancelText: "关闭",
    onOk() {
      history.replace('/login')
    }
  })
}

/** 配置request请求时的默认参数 */
const request = extend({
  prefix: INTERFACE_URL,
  errorHandler,
  mode: 'no-cors',
});

/** access_Token + select_key混入 */
request.interceptors.request.use((url, options) => {
  const token: string = localStorage.getItem('access_token') || ''
  const headers: RequestInit['headers'] & {
    AccessToken: string,
  } = Object.assign(options.headers, {
    AccessToken: `${ APP_SELECT_KEY }${token}`
  })
  return {
    options: { ...options, headers },
  };
});

request.interceptors.response.use(
  async (response: Response) => {
    const responseBody = await response.clone().json();

    /** [code success] 接口请求成功，不需要额外处理 */
    if (responseBody.code === 2000) {
      return responseBody.data
    }

    /** 
     * [ u -> 4001 ] 用户身份已经过期，清除后重新生成新的身份  
     * [ u -> 4002 ] 用户身份异常，清除后重新生成新的身份  
     * [ u -> 4003 ] 用户在其他地方登录，清除后重新生成新的身份
     * */
    if (
      responseBody.code === 4001 || 
      responseBody.code === 4002 || 
      responseBody.code === 4003
    ) {
      clearUserTraces()
      return undefined
    }

    if (responseBody.showMessage) {
      showMessageNotificationHandler(responseBody.showMessage)
    }

    throw responseBody
  }
)

export default request;