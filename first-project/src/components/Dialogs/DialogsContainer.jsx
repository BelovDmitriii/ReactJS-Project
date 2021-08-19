import React from 'react';
import { updateNewMessageTextCreator } from '../../redux/message-reducer';
import { sendMessageCreator } from '../../redux/message-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer> 
        { (store) => {
            let state = store.getState().messagePage;
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageTextCreator(body));
            }
            return ( <Dialogs updateNewMessageText = {onNewMessageChange} 
                              sendMessage = {onSendMessageClick}
                              dialogsPage = {state} />);
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;