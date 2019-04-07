import React from 'react';
import s from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Messages = (props) => {

  let dialogElements = props.dialogsData.map(d => {
    return <DialogItem id={d.id} name={d.name} />
  });
  let messageElements = props.messagesData.map(m => {
    return <MessageItem message={m.message} />
  });
  
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