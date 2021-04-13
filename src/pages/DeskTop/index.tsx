import styles from './index.less'
import Access from '@/components/action/AuthPage/access'

export default function IndexPage () {
  return (
    <div>
      <Access access={ 12 }>
        1111
      </Access>
      <h1 className={styles.title}>
        Page index
      </h1>
    </div>
  )
}
