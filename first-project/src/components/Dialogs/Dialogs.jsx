import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageTextCreator } from '../../redux/state';
import { sendMessageCreator } from '../../redux/state';

const Dialogs = (props) => {
    let state = props.store.getState().messagePage;
    let dialogsElement = state.dialogs.map ((dialog) => <DialogsItem name = {dialog.name} id = {dialog.id} />);
    let messageElement = state.messages.map ((mes) => <Message message={mes.message} />);
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageTextCreator(body));
    }
    let newMessageText = state.newMessageText;
   
    return (
        <div className = {style.dialogs}>
            <div className = {style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className = {style.messages}>
                {messageElement}
            </div>
            <div>
                <textarea value = {newMessageText}
                          onChange = {onNewMessageChange}
                          placeholder = "Введите сообщение"></textarea>
            </div>
            <div>
                <button className={style.btn} onClick = {onSendMessageClick}>Добавить сообщение</button>
            </div>
        </div>
    );
}

export default Dialogs;