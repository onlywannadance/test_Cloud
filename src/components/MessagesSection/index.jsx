import styles from './MessagesSection.module.scss'

import { Message } from '../Message'
import { NewMessage } from '../NewMessage'
import { Input } from '../Input'

import { useTypedSelector } from '../../hooks/redux'

export const MessagesSection = () => {
  const Messages = useTypedSelector((state) => state.Messages)

  return (
    <div className={styles.messagesSection}>
      {Messages.oldMessages.map((item) =>
        item.user.you ? (
          <Message date={item.created_at} key={item.id} my={true} text={item.message} main={false} title={item.title} avatar={item.avatar} />
        ) : (
          <Message date={item.created_at} key={item.id} my={false} text={item.message} main={false} title={item.title} avatar={item.avatar}/>
        ),
      )}
      {Messages.newMessages.length > 0 && <NewMessage /> }
      {Messages.newMessages.map((item) =>
        item.user.you ? (
          <Message date={item.created_at} key={item.id} my={true} text={item.message} main={false} title={item.title} avatar={item.avatar} />
        ) : (
          <Message date={item.created_at} key={item.id} text={item.message} my={false} main={false} title={item.title} avatar={item.avatar} />
        ),
      )}
      {Messages.oldMessages.length > 0 && <Input/>}
    </div>
  )
}
