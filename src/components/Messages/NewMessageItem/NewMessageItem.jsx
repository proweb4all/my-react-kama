import React from 'react';
import s from './NewMessageItem.module.css';

const NewMessageItem = (props) => {
  let newMessagelement = React.createRef();
  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onNewMessageChange = (e) => {
    props.updateNewMessageText(e.target.value)
  }
  return (
    <div className={s.new_message}>
      <h3>Enter new message</h3>
      <div>
        <textarea ref={newMessagelement} onChange={onNewMessageChange} value={props.newMessageText} placeholder='New message...'></textarea>
        <button onClick={onSendMessageClick}>Send Message</button>
      </div>
    </div>
  )
}

export default NewMessageItem;