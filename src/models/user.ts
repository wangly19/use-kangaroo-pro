import type { Effect, Reducer } from 'umi'
import { fetchUserInfo } from 'umi'

export interface UserInfo {
  name: string,
  avatar: string,
  uid: string,
  title: string,
  useMenuAuth: string[],
  usePageAuth: number[]
}

export interface UserState {
  userInfo?: UserInfo | null
  token?: string
}

export interface UserStore {
  namespace: 'user'
  state: UserState
  effects: {
    getUserInfo: Effect
  }
  reducers: {
    setToken: Reducer<UserState>,
    setUserInfo: Reducer<UserState>
  },
}



const userModel: UserStore =  {
  namespace: 'user',
  state: {
    userInfo: null,
    token: ''
  },
  effects: {
    * getUserInfo ( __, { call, put }) {
      const response = yield call(fetchUserInfo)
      yield put({
        type: 'setUserInfo',
        payload: response.data
      })
      return response.data
    }
  },
  reducers: {
    setToken(state, { token }) {
      return {
        ...state,
        token,
      }
    },
    setUserInfo(state, { payload }) {
      console.log(payload, 'payload')
      return {
        ...state,
        userInfo: payload
      }
    }
  },
}

export default userModel