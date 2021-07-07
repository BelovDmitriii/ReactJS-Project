import React from 'react';
import third from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={third.item}>
            <img src="https://sun9-15.userapi.com/impf/2nJa81lKvxUJXaeTwwiUTpiSsVEYdesU73XVqg/cHl0KfIBLmg.jpg?size=604x483&quality=96&sign=08689843ca70fd5897f31a074625f0ab&type=album" alt = 'ava'/>
            {props.message}
            <div>
                <span>like </span> {props.likeCounts}
            </div>
        </div>
        );
}

export default Post;