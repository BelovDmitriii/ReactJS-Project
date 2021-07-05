import React from 'react';
import first from "./Header.module.css";

const Header = () => {
    return (
        <header className={first.header}>
            <img src='https://w7.pngwing.com/pngs/851/542/png-transparent-blue-and-gray-couger-logo-lincoln-university-lincoln-blue-tigers-football-mid-america-intercollegiate-athletics-association-grambling-state-university-tiger-mammal-animals-cat-like.png' alt = "photo1" />
        </header>
    );
}

export default Header;