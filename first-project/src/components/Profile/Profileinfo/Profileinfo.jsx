import React from 'react';
import style from "./Profileinfo.module.css";
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {

        if (!props.profile) {
            return <Preloader />
        }

    return (
        <div>
            <div>
                <img src="https://w-dog.ru/wallpapers/0/12/450355658591404/ford-mustang-myshcy-avtomobil-zakuska-fotoraboty-peretashhit-gonki.jpg" alt="photo2" className={style.mainPhoto}/>
            </div>
            <div className = {style.descriptionBlock}>
                <img src={props.profile.photos.large} alt='Большая аватарка' className={style.largePhoto} />
            </div>
        </div>
    );
}

export default ProfileInfo;