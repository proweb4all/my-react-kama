import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();
//   let addPost = () => props.store.dispatch(addPostActionCreator())
//   let onPostChange = (text) => props.store.dispatch(updateNewPostTextActionCreator(text))
//   return (
//     <MyPosts updateNewPostText={onPostChange} addPost={addPost}
//       postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText} />
//   )
// }

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))},
    addPost: () => {dispatch(addPostActionCreator())}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;