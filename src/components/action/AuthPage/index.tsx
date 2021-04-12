import type { AuthRoute } from "@/types";
import type { FC, ReactElement} from "react";
import { cloneElement, useMemo } from 'react'
import type { UserInfo } from 'umi';
import { useModel } from 'umi'
import { diffRoutes } from "@/utils/auth";



interface AuthPageProps {
  routes: AuthRoute[],
  children: ReactElement
}

const AuthPage: FC<AuthPageProps> = (props) => {

  /** [props] */
  const { children, routes } = props

  /** [model] */
  const { initialState } = useModel('@@initialState')

  const patchRoutes = useMemo(() => {
    const user: UserInfo | undefined = initialState?.user
    return diffRoutes(routes, user?.useMenuAuth || [])
  }, [initialState, routes])

  return cloneElement(children, {
    ...children.props,
    routes: patchRoutes
  })
}

export default AuthPage