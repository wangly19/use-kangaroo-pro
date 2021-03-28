import styles from './index.less'

export default function IndexPage () {

  const a = 1
  const as = 2

  return (
    <div>
      {APP_SELECT_KEY}
      <h1 className={styles.title}>Page index{a}</h1>
    </div>
  )
}
