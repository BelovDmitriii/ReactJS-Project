import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className = {style.dialog + " " + style.active}>
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className = {style.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className = {style.dialogs}>
            <div className = {style.dialogsItem}>
                <DialogsItem name ="Dimon" id = "1" />
                <DialogsItem name ="Minin" id = "2" />
                <DialogsItem name ="Tusanich" id = "3" />
                <DialogsItem name ="Filar" id = "4" />
                <DialogsItem name ="Iosik" id = "5" />
                <DialogsItem name ="Aleksey" id = "6" />
            </div>
            <div className = {style.messages}>
                <Message message="Привет парни! Как ваши дела?" />
                <Message message="Привет! Тут не только парни так-то!" />
                <Message message="Всем привет! Какие планы на выходные" />
                <Message message="Скоро встретимся на даче! Yo!!!" />
                <Message message="Как я вижу, сегодня похоже все заняты ( . )( . )" />
            </div>
        </div>
    );
}

export default Dialogs;