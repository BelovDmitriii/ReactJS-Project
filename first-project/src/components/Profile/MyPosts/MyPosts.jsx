import React from 'react';
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {

    let postsElements = props.posts.map ((p) => <Post message={p.message} likeCounts={p.likeCounts} />);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={style.postsBlock}>
            <h3>Мои посты</h3>
            <div>
                Новый пост
            </div>
            <div>
                <textarea onChange = {onPostChange} ref = {newPostElement } value = {props.newPostText} />
            </div>
            <div>
                <button onClick = { onAddPost }>Добавить новый пост</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;