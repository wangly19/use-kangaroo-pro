import type { Settings as ProSettings } from '@ant-design/pro-layout';
import { UserStore, UserState } from './user';
import { GlobalStore, GlobalState } from './global'

export { UserStore, UserState, GlobalStore, GlobalState };

export type Loading = {
  global: boolean;
  effects: Record<string, boolean | undefined>;
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
};

export type ConnectStore = {
  loading: Loading;
  settings: ProSettings;
  user: UserState;
  global: GlobalState,
};
