import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.postsData.map(p => <Post message={p.message} numLikes={p.likesCount} />)
  let newPostElement = React.createRef();
  let onAddPost = () => props.addPost();
  let onPostChange = () => props.updateNewPostText(newPostElement.current.value);
  return (
    <div className={s.posts_block}>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder='New post...'/>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;