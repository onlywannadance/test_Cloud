import styles from './MyMessage.module.scss'
import { Time } from '../Time'

export const MyMessage = ({ text, date }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.myMessage}>
        <span>{text}</span>
        <Time date={date} my={true} />
      </div>
    </div>
  )
}
