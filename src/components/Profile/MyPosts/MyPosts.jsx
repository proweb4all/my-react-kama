import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElements = props.postsData
    .map(post => <Post message={post.message} numLikes={post.likesCount} />)

  return (
    <div className={s.posts_block}>
      <h3>My posts</h3>
      <div>
        <textarea placeholder='New post...'></textarea>
        <button>Add post</button>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;