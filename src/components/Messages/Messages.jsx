import React from 'react';
import s from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Messages = (props) => {
  let dialogsData = [
    { id: 1, name: 'Yury' },
    { id: 2, name: 'Valera' },
    { id: 3, name: 'Andrey' },
    { id: 4, name: 'Sveta' },
    { id: 5, name: 'Sasha' }
  ]
  let messagesData = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Hi, boy!' },
    { id: 3, message: 'Hi-hi!' },
    { id: 4, message: 'Hi, freind!' },
    { id: 5, message: 'Hiushki!' }
  ]
  let dialogElements = dialogsData.map(d => <DialogItem id={d.id} name={d.name} />)
  let messageElements = messagesData.map(m => <MessageItem message={m.message} />)
  
  return (
    <div className={s.messages_block}>
      <div className={s.dialogs}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
    </div >
  )
}

export default Messages;