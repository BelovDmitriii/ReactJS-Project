import React from 'react';
import { updateNewMessageTextCreator } from '../../redux/message-reducer';
import { sendMessageCreator } from '../../redux/message-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().messagePage;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextCreator(body));
    }
   
    return ( <Dialogs updateNewMessageText = {onNewMessageChange} 
                sendMessage = {onSendMessageClick}
                dialogsPage = {state} />);
}

export default DialogsContainer;