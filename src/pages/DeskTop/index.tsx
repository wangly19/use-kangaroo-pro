import { fetchLogin } from 'umi'
import styles from './index.less'

export default function IndexPage () {

  fetchLogin()

  return (
    <div>
      {APP_SELECT_KEY}
      <h1 className={styles.title}>
        Page index
      </h1>
    </div>
  )
}
