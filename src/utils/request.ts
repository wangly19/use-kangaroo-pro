
import { createElement } from 'react';
import { history } from 'umi'
import type { ResponseError } from 'umi-request';
import { extend } from 'umi-request';
import { notification, Modal } from 'antd';
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

/** 异常处理程序 */
function errorHandler (error: ResponseError) {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }

  return error 
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
  errorHandler
});

request.interceptors.response.use(
  async (response: Response) => {
    const responseBody = await response.clone().json();

    /** [code success] 接口请求成功，不需要额外处理 */
    if (responseBody.code === '200') {
      return responseBody.data
    }

    /** 
     * [ u -> 4001 ] 用户身份已经过期，清除后重新生成新的身份  
     * [ u -> 4002 ] 用户身份异常，清除后重新生成新的身份  
     * [ u -> 4003 ] 用户在其他地方登录，清除后重新生成新的身份
     * */
    if (
      responseBody.code === 'U4001' || 
      responseBody.code === 'U4002' || 
      responseBody.code === 'U4003'
    ) {
      clearUserTraces()
      return undefined
    }

    throw new Error('request fail ...')
  }
)

export default request;