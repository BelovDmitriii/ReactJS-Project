import React from 'react';
import second from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className={second.nav}>
                <div>
                    <div className={second.item}>
                        <NavLink to ="/profile" activeClassName = {second.active}>Profile</NavLink>
                    </div>
                    <div className={second.item}>
                        <NavLink to ="/dialogs" activeClassName = {second.active}>Messages</NavLink>
                    </div>
                    <div className={second.item}>
                        <NavLink to="/news" activeClassName = {second.active}>News</NavLink>
                    </div>
                    <div className={second.item}>
                        <NavLink to ="/music" activeClassName = {second.active}>Music</NavLink>
                    </div>
                    <div className={second.item}>
                        <NavLink to ="/settings" activeClassName = {second.active}>Settings</NavLink>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;