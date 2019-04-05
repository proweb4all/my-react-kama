import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' numLikes='5' />
        <Post message="It\'s my first post" numLikes='10' />
        <Post message='Hello, World!' />
      </div>
    </div>
  )
}

export default MyPosts;