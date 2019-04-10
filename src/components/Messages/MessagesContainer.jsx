import React from 'react';
import Messages from './Messages';
import {sendMessageCreator, updateNewMessageTextCreator} from '../../redux/messages-reducer';
import {connect} from 'react-redux';


// const MessagesContainer = (props) => {
//   let state = props.store.getState().messagesPages;
//   let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator());
//   }
//   let onNewMessageChange = (text) => {
//     props.store.dispatch(updateNewMessageTextCreator(text));
//   }
//   return (
//     <Messages messagesPages={state} updateNewMessageText={onNewMessageChange} sendMessage={onSendMessageClick} />
//   )
// }

let mapStateToProps = (state) => {
  return {
    messagesPages: state.messagesPages
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {dispatch(updateNewMessageTextCreator(text))},
    sendMessage: () => {dispatch(sendMessageCreator())}
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;