import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='http://lh6.googleusercontent.com/-gtN37kdyoCc/AAAAAAAAAAI/AAAAAAAAABk/QddRI6AAiMI/photo.jpg?sz=150' alt=''></img>
      post 1
      <div>Like</div>
    </div>
  )
}

export default Post;