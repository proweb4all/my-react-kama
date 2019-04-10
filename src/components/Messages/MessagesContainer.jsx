import React from 'react';
import Messages from './Messages';
import {sendMessageCreator, updateNewMessageTextCreator} from '../../redux/messages-reducer';
import {connect} from 'react-redux';

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
// const MessagesContainer = () => {
//   return (
//     <div>
//       <Messages />
//     </div >
//   )
// }



export default MessagesContainer;