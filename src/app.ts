import type { Dispatch, UserInfo } from 'umi';
import { history, getDvaApp } from 'umi';
import { message } from 'antd';

import type { ConnectStore } from './models/Connect';
import { checkPageAuth, diffRoutes, whitePath } from './utils/auth';
import authRoutes from '../config/authRoutes';

export const dva = {
  config: {
    onError(e: Error) {
      message.error(e.message, 3);
    },
  },
};

export function onRouteChange(routeInfo: any) {
  const token: string | null = localStorage.getItem('access_token');
  // eslint-disable-next-line no-underscore-dangle
  const store: any = getDvaApp()._store;

  const dispatch: Dispatch = store?.dispatch;

  const { user } = store?.getState() as ConnectStore;

  if (!whitePath.includes(routeInfo.location.pathname)) {
    if (token) {
      /** [info] 检查用户信息是否存在 */
      if (!user?.userInfo) {
        dispatch({
          type: 'user/getUserInfo',
        }).then((res: UserInfo | undefined) => {
          if (res) {
            const asyncRoutes = diffRoutes(authRoutes, res.useMenuAuth);
            dispatch({
              type: 'global/setRoutes',
              routes: asyncRoutes,
            });
            if (!checkPageAuth(asyncRoutes, routeInfo.location.pathname)) {
              history.replace('/error')
            }
          }
        });
      }
    } else {
      history.replace('/login');
    }
  }
}
