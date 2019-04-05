import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='http://lh6.googleusercontent.com/-gtN37kdyoCc/AAAAAAAAAAI/AAAAAAAAABk/QddRI6AAiMI/photo.jpg?sz=150' alt=''></img>
      {props.message}
      <div>Like - {props.numLikes}</div>
    </div>
  )
}

export default Post;