import { useState } from 'react';
import { history } from 'umi'
import { Tabs } from 'antd';
import ProForm, { ProFormText, ProFormCheckbox } from '@ant-design/pro-form';
import {
  AlipayCircleOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
  LockOutlined,
} from '@ant-design/icons';
import styles from './index.less';

export default () => {
  const [, setTabType] = useState<string>('account');

  const onLoginFinish = (value: any): Promise<any> => {
    history.replace('/')
    return Promise.resolve(value)
  }

  return (
    <div className={styles.appBackground}>
      <div className={styles.appLayout}>
        <ProForm
          onFinish={ onLoginFinish }
          submitter={{
            searchConfig: {
              submitText: '登录',
            },
            render: (_, dom) => dom.pop(),
            submitButtonProps: {
              size: 'large',
              style: {
                width: '100%',
              },
            },
          }}
        >
          <Tabs defaultActiveKey="account" centered onChange={setTabType}>
            <Tabs.TabPane tab="账户密码登录" key="account"></Tabs.TabPane>
            <Tabs.TabPane tab="手机号登录" key="mobile"></Tabs.TabPane>
          </Tabs>

          <ProFormText
            fieldProps={{
              size: 'large',
              prefix: <MobileOutlined />,
            }}
            name="accountNumber"
            placeholder="请输入手机号"
            rules={[
              {
                required: true,
                message: '请输入手机号!',
              },
              {
                pattern: /^1\d{10}$/,
                message: '不合法的手机号格式!',
              },
            ]}
          />

          <ProFormText.Password
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            name="password"
            placeholder="请输入密码"
            rules={[
              {
                required: true,
                message: '输入密码!',
              },
              {
                pattern: /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/,
                message: '您的密码复杂度太低!',
              },
            ]}
          />

          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码
            </a>
          </div>
        </ProForm>
        <div className={styles.other}>
          其他登录方式
          <AlipayCircleOutlined className={styles.icon} />
          <TaobaoCircleOutlined className={styles.icon} />
          <WeiboCircleOutlined className={styles.icon} />
        </div>
      </div>
    </div>
  );
};
