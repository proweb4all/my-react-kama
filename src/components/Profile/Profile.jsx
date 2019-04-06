import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  let postsData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It\'s my first post', likesCount: 15 },
    { id: 3, message: 'Hello, World!', likesCount: 7 }
  ]
  return (
    <div>
      <ProfileInfo />
      <hr></hr>
      <MyPosts postsData={postsData} />
    </div>
  )
}

export default Profile;