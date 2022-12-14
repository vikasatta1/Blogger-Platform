import React from 'react';
import PostItem from "../components/post/PostItem";
import vector from '../assets/vector-button.svg'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {postType} from "../redux/posts-reducer";

const HomePosts = () => {
    const posts = useSelector<AppRootStateType,Array<postType>>(state => state.posts)
    return (
        <>
            <div className={'main-header'}>
                <h2>Posts</h2>
            </div>
            <div className={'page-contentPost'}>
            <div className="select">
                <select>
                    <option value="value1">New posts first</option>
                    <option value="value2">Old posts first</option>
                </select>
            </div>
            <div className='wrap-posts'>
                {
                    posts.map((p)=> <PostItem
                        key={p.id}
                        id={p.id}
                        title={p.title}
                        content={p.content}
                        blogId={p.blogId}
                        blogName={p.blogName}
                        createdAt={p.createdAt}
                        shortDescription={p.shortDescription}
                    />)
                }
            </div>
            </div>
            <div className={'button-wrap'}>
                <button>Show more <img  className={'vector-button'} src={vector} alt={'vector'}/></button>
            </div>

        </>
    );
};

export default HomePosts;