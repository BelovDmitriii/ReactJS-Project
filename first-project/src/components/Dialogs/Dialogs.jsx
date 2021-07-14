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

    let dialogsData = [
        {id: 1, name: "Dimon"},
        {id: 2, name: "Minin"},
        {id: 3, name: "Tusanich"},
        {id: 4, name: "Filar"},
        {id: 5, name: "Iosik"},
        {id: 6, name: "Aleksey"}
    ];

    let messageData = [
        {id:1, message: "Привет парни! Как ваши дела?"},
        {id:2, message: "Привет! Тут не только парни так-то!"},
        {id:3, message: "Всем привет! Какие планы на выходные"},
        {id:4, message: "Скоро встретимся на даче! Yo!!!"},
        {id:5, message: "Как я вижу, сегодня похоже все заняты ( . )( . )"},
    ];

    let dialogsElement = dialogsData.map ((dialog) => <DialogsItem name = {dialog.name} id = {dialog.id} />);
    let messageElement = messageData.map ((mes) => <Message message={mes.message} />);
   

    return (
        <div className = {style.dialogs}>
            <div className = {style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className = {style.messages}>
                {messageElement}
            </div>
        </div>
    );
}

export default Dialogs;