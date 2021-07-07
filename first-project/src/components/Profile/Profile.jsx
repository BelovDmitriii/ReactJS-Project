import React from 'react';
import third from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://w-dog.ru/wallpapers/0/12/450355658591404/ford-mustang-myshcy-avtomobil-zakuska-fotoraboty-peretashhit-gonki.jpg" alt="photo2" />
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;