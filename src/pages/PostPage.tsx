import React from 'react';
import vector from '../assets/rectangle-right.svg';
import arrowLeft from '../assets/arrow-left.svg';
import {postType} from "../redux/posts";


const PostPage = ({id ,title ,shortDescription,content,blogId,blogName,createdAt}:postType) => {
    return (
        <>
            <div className={'main-header'}>
                <div className={'main-header__item-page'}>
                    <h2>Posts</h2>
                    <img src={vector} alt={'vector'} className={'rectangle-right__item-page'}/>
                    <p className={''}> {shortDescription}</p>
                </div>
            </div>
            <div className="page-content__item-page">
                <div className={'link-back'}>
                    <img src={arrowLeft} alt={'arrowLeft'} className={'arrowLeft'}/>
                    <p>Back to posts</p>
                </div>
                <div className={'description-post'}>
                    <div className={'logo-small'}>
                    </div>
                    <p className={'description-post__p'}>
                        {shortDescription}
                    </p>
                </div>
                <div className="options-post">
                    <div className="options-post__name">
                        <h2>{title}</h2>
                        <p>(for public posts)</p>
                    </div>
                    <div className="options-post__date">
                        <p>{createdAt}</p>
                    </div>

                </div>
                <div className={'banner_post-page'}>

                </div>
                <div className={'post-text'}>

                </div>
            </div>

        </>
    );
};

export default PostPage;