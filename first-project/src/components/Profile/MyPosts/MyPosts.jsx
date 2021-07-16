import React from 'react';
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {

    let postsElements = props.posts.map ((p) => <Post message={p.message} likeCounts={p.likeCounts} />);

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