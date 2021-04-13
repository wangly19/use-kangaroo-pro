import type { AuthRoute } from '@/types';
import { createElement } from 'react'
import { history, fetchUserInfo } from 'umi';
import AuthPage from './components/action/AuthPage'

export async function getInitialState(): Promise<{
  user?: API.UserInfo;
  queryUserInfo?: () => Promise<API.UserInfo | undefined>;
}> {
  const queryUserInfo = async () => {
    try {
      const user = await fetchUserInfo();
      return user;
    } catch (error) {
      history.replace('/login')
    }
    return undefined;
  };
  // 如果是登录页面，不执行
  if (history.location.pathname !== '/login') {
    const user = await fetchUserInfo();
    return {
      queryUserInfo,
      user,
    };
  }
  return {
    queryUserInfo,
  };
}

export function rootContainer(container: React.ReactNode, { routes }: {
  routes: AuthRoute[]
}) {
  const props: any = {
    routes
  }
  return createElement(AuthPage, props, container);
}