import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

const MyPosts = (props) => {
  let postElements = props.profilePage.postsData.map(p => <Post message={p.message} numLikes={p.likesCount} />)
  let newPostElement = React.createRef();
  let addPost = () => props.dispatch(addPostActionCreator())
  let onPostChange = () => props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
  return (
    <div className={s.posts_block}>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText} placeholder='New post...'/>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;