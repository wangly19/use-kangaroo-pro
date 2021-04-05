import AvatarBar from './AvatarBar'
import MessageBar from './MessageBar'

import styles from './index.less'

export default function GlobalContainer() {
  return (
    <div className={ styles.header }>
      <MessageBar/>
      <AvatarBar/>
    </div>
  )
}
