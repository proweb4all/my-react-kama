import React from 'react';
import Messages from './Messages';
import {sendMessageCreator, updateNewMessageTextCreator} from '../../redux/messages-reducer';


const MessagesContainer = (props) => {
  let state = props.store.getState().messagesPages;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }
  let onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text));
  }
  return (
    <Messages messagesPages={state} updateNewMessageText={onNewMessageChange} sendMessage={onSendMessageClick} />
  )
}

export default MessagesContainer;