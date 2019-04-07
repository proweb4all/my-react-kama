import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.postsData.map(p => <Post message={p.message} numLikes={p.likesCount} />)
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost(newPostElement.current.value);
    newPostElement.current.value = '';
  }
  return (
    <div className={s.posts_block}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement} placeholder='New post...'></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;