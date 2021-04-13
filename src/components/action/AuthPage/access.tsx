import type { FC } from 'react'
import { useCallback } from 'react'
import { useModel } from 'umi'

interface AccessProps {
  access: number
}

const Access: FC<AccessProps> = (props) => {

  const { children, access } = props
  
  const { initialState } = useModel('@@initialState')

  const hasAccess = useCallback((id: number): boolean => {
    const user = initialState?.user
    if (user && user.usePageAuth.includes(id)) {
      return true
    }
    return false
  }, [initialState])

  return <>
    { hasAccess(access) ? children : null }
  </>
}

export default Access