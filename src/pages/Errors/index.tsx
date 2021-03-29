import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC = () => {

  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，你访问的页面不存在，请检查您输入的网址是否正确。"
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          返回首页
        </Button>
      }
    />
  )
}

export default NoFoundPage;