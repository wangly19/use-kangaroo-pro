import type { AuthRoute } from '@/types';
import { createElement } from 'react'
import { history, fetchUserInfo } from 'umi';
import AuthPage from './components/action/AuthPage'
import { whitePath } from '@/utils/auth'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export async function getInitialState(): Promise<{
  user?: API.UserInfo
  queryUserInfo?: (token: string) => Promise<API.UserInfo | undefined>;
  token?: string
}> {
  const queryUserInfo = async (token: string): Promise<API.UserInfo | undefined> => {
    try {
      const user: API.UserInfo = await fetchUserInfo<string, API.UserInfo>(token);
      return user;
    } catch (error) {
      history.replace('/login')
    }
    return undefined;
  };
  // 如果是登录页面，不执行
  const token = localStorage.getItem('access_token')
  if (history.location.pathname !== '/login' && token) {
    const user = await queryUserInfo(token);
    return {
      queryUserInfo,
      user,
      token
    };
  }
  return {
    queryUserInfo,
    user: undefined,
    token: ''
  };
}

export function onRouteChange({ location }: {
  location: Location
}) {
  const token = localStorage.getItem('access_token')
  if (token) {
    if (location.pathname === '/login') {
      history.replace('/')
    }
  } else if (!whitePath.includes(location.pathname)) {
      history.replace('/login')
    }
  
}


export function rootContainer(lastContainer: React.ReactNode, { routes }: {
  routes: AuthRoute[]
}) {
  const props: {
    routes: AuthRoute[]
  } & any = {
    routes
  }
  const authPageProvider = createElement(AuthPage, props, lastContainer);
  const reactQueryDevtools = createElement(ReactQueryDevtools, {
    initialIsOpen: true,
    position: 'bottom-right',
  }, null)
  const queryClientProvider = createElement(QueryClientProvider, {
    client: queryClient,
  }, authPageProvider, reactQueryDevtools)
  return queryClientProvider
}