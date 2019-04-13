// import React from 'react';
// import s from './Profile.module.css';
// import MyPostsContainer from './MyPosts/MyPostsContainer';
// import ProfileInfo from './ProfileInfo/ProfileInfo';

// const Profile = () => {
//   return (
//     <div>
//       <ProfileInfo />
//       <hr></hr>
//       <MyPostsContainer />
//     </div>
//   )
// }

// export default Profile;

import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;