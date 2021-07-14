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

    let postsElements = postData.map ((posts) => <Post message={posts.message} likeCounts={posts.likeCounts} />);

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;