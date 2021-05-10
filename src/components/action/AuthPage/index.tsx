import type { AuthRoute } from "@/types";
import type { FC, ReactElement} from "react";
import { cloneElement, useMemo } from 'react'
import { useModel } from 'umi'
import { diffRoutes } from "@/utils/auth";

interface AuthPageProps {
  routes: AuthRoute[],
  children: ReactElement
}

const AuthProvider: FC<AuthPageProps> = (props) => {

  /** [props] */
  const { children, routes } = props

  /** [model] */
  const { user } = useModel('@@initialState', (model) => ({
    user: model.initialState?.user,
  }))

  const patchRoutes = useMemo(() => {
    return diffRoutes(routes, user?.useMenuAuth || [])
  }, [user, routes])

  return cloneElement(children, {
    ...children.props,
    routes: patchRoutes
  })
}

export default AuthProvider