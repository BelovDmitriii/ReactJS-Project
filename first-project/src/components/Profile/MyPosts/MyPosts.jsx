import React from 'react';
import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                New Post
            </div>
            <Post message="Hi, how are you???" likeCounts="25" />
            <Post message="I'am OK! It's my first post" likeCounts="1" />
            <Post message="There is no one here" likeCounts="0" />
            <Post message="Yeah, I'am the first" likeCounts="37" />
        </div>
    );
}

export default MyPosts;