import React from 'react';
import style from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.state.posts} addPost= {props.addPost} />
        </div>
    );
}

export default Profile;