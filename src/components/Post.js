import React from "react";

function Post({ post }) {
    const { title, description } = post;
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default Post;
