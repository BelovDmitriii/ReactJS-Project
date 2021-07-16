import React from 'react';
import third from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.state.posts} />
        </div>
    );
}

export default Profile;