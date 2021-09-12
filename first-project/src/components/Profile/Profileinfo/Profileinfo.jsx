import React from 'react';
import style from "./Profileinfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://w-dog.ru/wallpapers/0/12/450355658591404/ford-mustang-myshcy-avtomobil-zakuska-fotoraboty-peretashhit-gonki.jpg" alt="photo2" className={style.mainPhoto}/>
            </div>
            <div className = {style.descriptionBlock}>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;