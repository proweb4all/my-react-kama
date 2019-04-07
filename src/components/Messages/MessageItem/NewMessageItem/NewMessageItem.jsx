import React from 'react';
import s from './NewMessageItem.module.css';
//import Post from './Post/Post';

const NewMessageItem = (props) => {
  let newMessagelement = React.createRef();
  let addMessage = () => {
    let text = newMessagelement.current.value;
    alert(text);
  }
  return (
    <div className={s.new_message}>
      <h3>Enter new message</h3>
      <div>
        <textarea ref={newMessagelement} placeholder='New message...'></textarea>
        <button onClick={addMessage}>Add Message</button>
      </div>
    </div>
  )
}

export default NewMessageItem;