// import React from 'react';
// import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
// import MyPosts from './MyPosts';
// import {connect} from 'react-redux';

// const mapStateToProps = (state) => {
//   return {
//     postsData: state.profilePage.postsData,
//     newPostText: state.profilePage.newPostText
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewPostText: (text) => {
//       let action = updateNewPostTextActionCreator(text);
//       dispatch(action);
//       //dispatch(updateNewPostTextActionCreator(text))
//     },
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     }
//   }
// }

// const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


// export default MyPostsContainer;

import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;