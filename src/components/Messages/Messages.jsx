import React from 'react';
import s from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import NewMessageItem from './NewMessageItem/NewMessageItem';

const Messages = (props) => {
  let dialogElements = props.messagesPages.dialogsData.map(d => <DialogItem id={d.id} name={d.name} /> );
  let messageElements = props.messagesPages.messagesData.map(m => <MessageItem message={m.message} /> );
  
  return (
    <div className={s.messages_block}>
      <div className={s.dialogs}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
        <NewMessageItem newMessageText={props.messagesPages.newMessageText} updateNewMessageText={props.updateNewMessageText}
          sendMessage={props.sendMessage} />
      </div>
    </div >
  )
}

// const Messages = (props) => {
//   return (
//     <div className={s.messages_block}>
//       <h3>My messages</h3>
//     </div >
//   )
// }



export default Messages;