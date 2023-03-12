import { MyMessage } from '../MyMessage'
import { SomeoneMessage } from '../SomeoneMessage'

export const Message = ({ my, main, text, date, title, avatar}) => {
  return my ? (
    <MyMessage date={date} text={text} />
  ) : (
    <SomeoneMessage date={date} text={text} main={main} title={title} avatar={avatar}/>
  )
}
