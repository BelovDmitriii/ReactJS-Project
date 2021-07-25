import React from 'react';
import style from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.profilePage.posts}
                     addPost= {props.addPost} 
                     newPostText = {props.profilePage.newPostText}
                     updateNewPostText = {props.updateNewPostText} />
        </div>
    );
}

export default Profile;