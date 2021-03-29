import { Tag, Tabs } from 'antd';
import ProForm, { ProFormText, ProFormCheckbox } from '@ant-design/pro-form';
import {
  MobileOutlined,
  LockOutlined,
  QuestionCircleFilled,
} from '@ant-design/icons';
import LogoSvg from '@/icons/logo.svg';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.appBackground}>
      <div>
        <QuestionCircleFilled
          style={{
            fontSize: 24,
          }}
        />
      </div>
      <ProForm
        className={styles.appLayout}
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
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          <img
            style={{
              height: '44px',
              marginRight: 16,
            }}
            alt="logo"
            src={LogoSvg}
          />
          KanGaroo Pro
        </h1>
        <div
          style={{
            marginTop: 12,
            textAlign: 'center',
            marginBottom: 40,
          }}
        >
          这是一个非常<Tag color="processing">酷</Tag>
          的中后台项目架构，它能帮助你和你的团队快速进行项目开发。
        </div>

        <Tabs defaultActiveKey="1" centered>
          <Tabs.TabPane tab="账户密码登录" key="account">
          </Tabs.TabPane>
          <Tabs.TabPane tab="手机号登录" key="mobile">
          </Tabs.TabPane>
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
          >忘记密码
          </a>
        </div>
      </ProForm>
    </div>
  );
};
