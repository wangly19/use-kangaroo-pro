import type { FC } from "react";

export const AuthPermission: FC = (props) => {

  /** [props] */
  const { children } = props

  const isShow: boolean = false

  return <>
    { isShow && children }
  </>
}