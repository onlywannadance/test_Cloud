import styles from './PageIndex.module.scss'

import { ChatList } from '../../components/ChatList'
import { MessagesSection } from '../../components/MessagesSection'
import { Header } from '../../components/Header'

export const PageIndex = (props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.rightBar}>
          <ChatList />
        </div>
        <div className={styles.mainSection}>
          <Header />
          <MessagesSection />
        </div>
      </div>
    </>
  )
}
