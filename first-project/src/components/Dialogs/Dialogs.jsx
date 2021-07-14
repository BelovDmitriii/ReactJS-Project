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

    return (
        <div className = {style.dialogs}>
            <div className = {style.dialogsItem}>
                <DialogsItem name = {dialogsData[0].name} id = {dialogsData[0].id} />
                <DialogsItem name = {dialogsData[1].name} id = {dialogsData[1].id} />
                <DialogsItem name = {dialogsData[2].name} id = {dialogsData[2].id} />
                <DialogsItem name = {dialogsData[3].name} id = {dialogsData[3].id} />
                <DialogsItem name = {dialogsData[4].name} id = {dialogsData[4].id} />
                <DialogsItem name = {dialogsData[5].name} id = {dialogsData[5].id} />
                
            </div>
            <div className = {style.messages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
                <Message message={messageData[3].message} />
                <Message message={messageData[4].message} />
            </div>
        </div>
    );
}

export default Dialogs;