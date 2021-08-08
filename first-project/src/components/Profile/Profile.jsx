import React from 'react';
import style from "./Profile.module.css";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store = {props.store} />
        </div>
    );
}

export default Profile;