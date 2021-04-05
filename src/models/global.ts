import type { Reducer } from "@/.umi/plugin-dva/connect"
import type { AuthRoute } from "@/types"

export interface GlobalState {
  routes: AuthRoute[]
}

export interface GlobalStore {
  namespace: 'global',
  state: GlobalState,
  reducers: {
    setRoutes: Reducer<GlobalState>
  }
}

const globalModel: GlobalStore = {
  namespace: 'global',
  state: {
    routes: []
  },
  reducers: {
    setRoutes(state, { routes }) {
      return {
        ...state,
        routes
      }
    }
  }
}

export default globalModel