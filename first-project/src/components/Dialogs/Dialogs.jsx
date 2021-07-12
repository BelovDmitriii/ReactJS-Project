import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className = {style.dialogs}>
            <div className = {style.dialogsItem}>
                <div className = {style.dialog + " " + style.active}>
                   <NavLink to = "/dialogs/1">Dimon</NavLink>
                </div>
                <div className = {style.dialog}>
                    <NavLink to = "/dialogs/2">Minin</NavLink>
                </div>
                <div className = {style.dialog}>
                    <NavLink to="/dialogs/3">Tusanich</NavLink>
                </div>
                <div className = {style.dialog}>
                    <NavLink to = "/dialogs/4">Filar</NavLink>
                </div>
                <div className = {style.dialog}>
                    <NavLink to = "/dialogs/5">Iosik</NavLink>
                </div>
                <div className = {style.dialog}>
                    <NavLink to = "/dialogs/6">Aleksey</NavLink>
                </div>
            </div>
            <div className = {style.messages}>
                <div className = {style.message}>
                    Привет парни! Как ваши дела? 
                </div>
                <div className = {style.message}>
                    Привет! Тут не только парни так-то!
                </div>
                <div className = {style.message}>
                    Всем привет! Какие планы на выходные?
                </div>
                <div className = {style.message}>
                    Сегодня все заняты, как я вижу(
                </div>
            </div>
        </div>
    );
}

export default Dialogs;