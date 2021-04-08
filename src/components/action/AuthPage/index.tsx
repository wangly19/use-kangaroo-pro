import type { AuthRoute } from "@/types";
import { diffRoutes } from "@/utils/auth";
import type { FC, ReactElement} from "react";
import { cloneElement } from 'react'
import { useModel } from 'umi'



interface AuthPageProps {
  routes: AuthRoute[],
  children: ReactElement
}

const AuthPage: FC<AuthPageProps> = (props) => {

  /** [props] */
  const { children, routes } = props

  /** [model] */
  const { initialState } = useModel('@@initialState')
  
  console.log(initialState, 'initialState')

  return cloneElement(children, {
    ...children.props,
    routes: diffRoutes(routes, ['角色1', '角色10'])
  })
}

export default AuthPage