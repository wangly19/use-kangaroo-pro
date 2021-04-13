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

export function userModel () {
  // const {} = {}
}