import React from 'react';
import second from "./Navbar.module.css";

const Navbar = () => {
    return (
            <nav className={second.nav}>
                <div>
                    <div className={second.item}>
                        <a href="/profile">Profile</a>
                    </div>
                    <div className={second.item}>
                        <a href="/dialogs">Messages</a>
                    </div>
                    <div className={second.item}>
                        <a href="/news">News</a>
                    </div>
                    <div className={second.item}>
                        <a href="/music">Music</a>
                    </div>
                    <div className={second.item}>
                        <a href="/settings">Settings</a>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;