import React from 'react';
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Привет! Как дела?", likeCounts: "25"},
        {id: 1, message: "Да я нормально! Это мой первый пост", likeCounts: "1"},
        {id: 1, message: "Похоже здесь никого нет(", likeCounts: "0"},
        {id: 1, message: "Оу-е! Я первый!!!", likeCounts: "37"},
    ];

    return (
        <div className={style.postsBlock}>
            <h3>Мои посты</h3>
            <div>
                Новый пост
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Добавить новый пост</button>
            </div>
            <div className={style.posts}>
                <Post message= {postData[0].message} likeCounts = {postData[0].likeCounts} />
                <Post message= {postData[1].message} likeCounts = {postData[1].likeCounts} />
                <Post message= {postData[2].message} likeCounts = {postData[2].likeCounts} />
                <Post message= {postData[3].message} likeCounts = {postData[3].likeCounts} />
            </div>
        </div>
    );
}

export default MyPosts;