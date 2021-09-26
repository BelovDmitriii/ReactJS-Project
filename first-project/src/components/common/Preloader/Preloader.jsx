import React from 'react';
import preloader from '../../../assets/Spinner-2.gif';
import styles from '../../Users/users.module.css';
let Preloader = (props) => {
    return <div style = { { backgroundColor: "white"} }>
        <img src= {preloader} alt = {"Preloader"} className = {styles.loading} />
    </div>
}

export default Preloader;