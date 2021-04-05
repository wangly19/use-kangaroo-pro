import type { AuthRoute } from "@/types";
import { checkPageAuth } from "@/utils/auth";
import type { FC} from "react";



interface AuthPageProps {
  routes: AuthRoute[],
  path: string | undefined
}

const AuthPage: FC<AuthPageProps> = (props) => {

  /** [props] */
  const { children, routes, path } = props

  const isShow = () => {
    return path && checkPageAuth(routes, path)
  }

  return <>
  { isShow() ? children : null }
  </>
}

export default AuthPage