import React from 'react';
import second from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className={second.nav}>
                <div>
                    <div className={second.item}>
                        <NavLink to ="/profile" activeClassName = {second.active}>Моя страница</NavLink>
                    </div>
                    <div className={second.item}>
                        <NavLink to ="/dialogs" activeClassName = {second.active}>Сообщения</NavLink>
                    </div>
                    <div className={second.item}>
                        <NavLink to ="/users" activeClassName = {second.active}>Польватели</NavLink>
                    </div>
                    <div className={second.item}>
                        <NavLink to="/news" activeClassName = {second.active}>Новости</NavLink>
                    </div>
                    <div className={second.item}>
                        <NavLink to ="/music" activeClassName = {second.active}>Музыка</NavLink>
                    </div>
                    <div className={second.item}>
                        <NavLink to ="/settings" activeClassName = {second.active}>Настройки</NavLink>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;