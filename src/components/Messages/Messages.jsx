import React from 'react';
import s from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import NewMessageItem from './MessageItem/NewMessageItem/NewMessageItem';

const Messages = (props) => {

  let dialogElements = props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} /> );
  let messageElements = props.state.messagesData.map(m => <MessageItem message={m.message} /> );
  
  return (
    <div className={s.messages_block}>
      <div className={s.dialogs}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
        <NewMessageItem newMessageText={props.state.newMessageText} dispatch={props.dispatch} />
      </div>
    </div >
  )
}

export default Messages;