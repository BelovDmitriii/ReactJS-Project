import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className = {style.dialogs}>
            <div className = {style.dialogsItem}>
                <div className = {style.dialog + " " + style.active}>
                    Dimon
                </div>
                <div className = {style.dialog}>
                    Minin
                </div>
                <div className = {style.dialog}>
                    Tusanich
                </div>
                <div className = {style.dialog}>
                    Filar
                </div>
                <div className = {style.dialog}>
                    Iosik
                </div>
                <div className = {style.dialog}>
                    Aleksey
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