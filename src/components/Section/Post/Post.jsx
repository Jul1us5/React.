import React from 'react';
import style from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={style.background}>{props.value}</div>
    );
}

export default Post;