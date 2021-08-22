import React from 'react';
import { connect } from 'react-redux';
import { updateNewMessageTextCreator } from '../../redux/message-reducer';
import { sendMessageCreator } from '../../redux/message-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.messagePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageTextCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;