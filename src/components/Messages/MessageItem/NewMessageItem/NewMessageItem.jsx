import React from 'react';
import s from './NewMessageItem.module.css';
import {sendMessageCreator, updateNewMessageTextCreator} from '../../../../redux/state';

//import Post from './Post/Post';

const NewMessageItem = (props) => {
  let newMessagelement = React.createRef();
  let sendMessage = () => {
    // let text = newMessagelement.current.value;
    // alert(text);
    props.dispatch(sendMessageCreator());
  }
  let onNewMessageChange = (e) => {
    //props.updateNewPostText(newPostElement.current.value)
    props.dispatch(updateNewMessageTextCreator(e.target.value));  //newMessagelement.current.value
  }
  return (
    <div className={s.new_message}>
      <h3>Enter new message</h3>
      <div>
        <textarea ref={newMessagelement} onChange={onNewMessageChange} value={props.newMessageText} placeholder='New message...'></textarea>
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  )
}

export default NewMessageItem;