import React from 'react';
import s from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import NewMessageItem from './MessageItem/NewMessageItem/NewMessageItem';
import Messages from './Messages';

const MessagesContainer = (props) => {

  let dialogElements = props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} /> );
  let messageElements = props.state.messagesData.map(m => <MessageItem message={m.message} /> );
  
  return (
    <Messages />
  )
}

export default MessagesContainer;