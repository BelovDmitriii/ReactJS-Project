import React from 'react';
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = () => {
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
                <Post message="Hi, how are you???" likeCounts="25" />
                <Post message="I'am OK! It's my first post" likeCounts="1" />
                <Post message="There is no one here" likeCounts="0" />
                <Post message="Yeah, I'am the first" likeCounts="37" />
            </div>
        </div>
    );
}

export default MyPosts;