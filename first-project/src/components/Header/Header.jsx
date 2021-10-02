import React from 'react';
import { NavLink } from 'react-router-dom';
import first from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={first.header}>
            <img src='https://w7.pngwing.com/pngs/851/542/png-transparent-blue-and-gray-couger-logo-lincoln-university-lincoln-blue-tigers-football-mid-america-intercollegiate-athletics-association-grambling-state-university-tiger-mammal-animals-cat-like.png' alt = "photo1" />
            <div className = {first.loginBlock}>
                { props.isAuth ? props.login 
                : <NavLink to= {'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;