import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <hr></hr>
      <MyPosts postsData={props.state.postsData} addPost={props.addPost} />
    </div>
  )
}

export default Profile;