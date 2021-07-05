import React from 'react';
import third from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={third.content}>
            <div>
                <img src="https://w-dog.ru/wallpapers/0/12/450355658591404/ford-mustang-myshcy-avtomobil-zakuska-fotoraboty-peretashhit-gonki.jpg" alt="photo2" />
            </div>
            <div>
                Ava + description
            </div>
            <div>
                My Posts
            </div>
            <div>
                New Post
            </div>
            <div className = {third.posts}>
                <div className={third.item}>
                    Post 1
                </div>
                <div className={third.item}>
                    Post 2
                </div>     
            </div>
            
        </div>
    );
}

export default Profile;