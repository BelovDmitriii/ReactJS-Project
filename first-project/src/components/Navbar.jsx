import React from 'react';
import second from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={second.nav}>
            <div>
                <div className = {second.item}>
                    <a>Profile</a>
                </div>
                <div className = {second.item}>
                    <a>Messages</a>
                </div>
                <div className = {second.item}>
                    <a>News</a>
                </div>
                <div className = {second.item}>
                    <a>Music</a>
                </div>
                <div className = {second.item}>
                    <a>Settings</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;