import React from 'react';
import blogsImg from '../../assets/list.svg'
import postsImg from '../../assets/posts.svg'
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <div className={'navigation'}>
            <Link to={'blogs'}><div className={'blogsNav'}><img src={blogsImg} /> <p>Blogs</p></div></Link>
            <Link to={'posts'}> <div className={'posts'}><img src={postsImg}/> <p>Posts</p></div></Link>
        </div>
    );
};

export default Navigation;