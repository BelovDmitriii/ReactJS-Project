import React from 'react';
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {

    let postsElements = props.posts.map ((p) => <Post message={p.message} likeCounts={p.likeCounts} />);
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }

    return (
        <div className={style.postsBlock}>
            <h3>Мои посты</h3>
            <div>
                Новый пост
            </div>
            <div>
                <textarea ref = {newPostElement } ></textarea>
            </div>
            <div>
                <button onClick = { addPost }>Добавить новый пост</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;