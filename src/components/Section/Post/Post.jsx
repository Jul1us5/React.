import React from 'react';
import style from './Post.module.scss';

const Post = (props) => {
    return (
        <div>{props.value}</div>
    );
}

export default Post;