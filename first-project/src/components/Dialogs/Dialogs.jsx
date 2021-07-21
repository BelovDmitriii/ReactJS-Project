import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map ((dialog) => <DialogsItem name = {dialog.name} id = {dialog.id} />);
    let messageElement = props.state.messages.map ((mes) => <Message message={mes.message} />);
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert (text);
    }
   
    return (
        <div className = {style.dialogs}>
            <div className = {style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className = {style.messages}>
                {messageElement}
            </div>
            <div>
                <textarea ref = {newMessageElement}></textarea>
            </div>
            <div>
                <button className={style.btn} onClick = {addMessage}>Добавить сообщение</button>
            </div>
        </div>
    );
}

export default Dialogs;