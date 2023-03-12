import styles from './SomeoneMessage.module.scss'

import { Avatar } from '../Avatar'
import { Time } from '../Time'

export const SomeoneMessage = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.someoneMessage}>
        {props.main && (
          <>
            <div className={styles.userName}>{props.title}</div>
            <div className={styles.avatar}>
                <Avatar src={props.avatar} size={'md'} />
            </div>
          </>
        )}
        <span>{props.text}</span>
        <Time date={props.date} my={false} />
      </div>
    </div>
  )
}
