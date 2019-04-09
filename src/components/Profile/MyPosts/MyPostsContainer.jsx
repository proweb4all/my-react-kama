import React from 'react';
//import s from './MyPosts.module.css';
//import Post from './Post/Post';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => props.store.dispatch(addPostActionCreator())
  let onPostChange = (text) => props.store.dispatch(updateNewPostTextActionCreator(text))
  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost}
      postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText} />
  )
}

export default MyPostsContainer;