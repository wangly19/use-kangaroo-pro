import type { AuthRoute } from '@/types'

export const whitePath = ['/error', '/login']

/**
 * 检查路由权限是否存在
 * @param { AuthRoute } route 当前递归的路由
 * @param { string[] } authKey 当前用户的权限集合
 * @returns { boolean } 是否存在资源访问权限
 */
export function hasRoles (route: AuthRoute, authKeys: string[]): boolean {
  /** [if] 路由是否存在auth字段 */
  if (route?.auth) {
    return authKeys.some((k: string) => route.auth?.includes(k))
  }

  /** @default true 没有权限需要检测 */
  return true
}

/**
 * 过滤权限方法
 * @param { AuthRoute[] } routes 当前应用路由列表
 * @param { string[] } authKey 当前用户的权限集合
 */
 export function filterRoutes(routes: AuthRoute[], authKeys: string[]): AuthRoute[] {
  const result: AuthRoute[] = []
  routes.forEach((item: AuthRoute) => {
    const cloneRoute: AuthRoute = { ...item }
    console.log(hasRoles(cloneRoute, authKeys), cloneRoute?.path)
    if (hasRoles(cloneRoute, authKeys)) {
      /** [if] 是否存在children节点 */
      if (cloneRoute.routes) {
        cloneRoute.routes = filterRoutes(cloneRoute.routes, authKeys)
      }
      result.push(cloneRoute)
    }
  })
  return result
}

/**
 * diff路由差异进行生成真实路由
 * @param { AuthRoute[] } routes 当前应用路由列表
 * @param { string[] } authKey 当前用户的权限集合
 */
export function diffRoutes (routes: AuthRoute[], authKeys: string[]): AuthRoute[] {

  /** [if] 如果用户权限包含超级管理员，默认拥有所有菜单权限 */
  if (authKeys.includes('admin')) {
    return routes
  }
  
  return filterRoutes(routes, authKeys)
}


export function getRoutePaths (routes: AuthRoute[]): string[] {
  return routes.map((route: AuthRoute) => route?.path || '')
}

export function checkPageAuth (routes: AuthRoute[], path: string): boolean {
  const isCorrect: boolean = routes.findIndex((route: AuthRoute) => route.path === path) !== -1
  console.log('checkPageAuth', isCorrect, routes, path)
  return isCorrect
}