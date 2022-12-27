import React from 'react';
import {postType} from "../../redux/posts";

const PostItem = ({id, title, shortDescription, content, blogId, blogName, createdAt}: postType) => {
    return (
        <div className={'postItem'}>
            <div className="postItem-imgBig">

            </div>
            <div className="postItem-description">
                <div className="description-logo">
                    <div className={'logo-small'}>

                    </div>
                </div>
                <div className="description-text">
                    <h3>{title}</h3>
                    <p>The best blog in your village</p>
                    <p className={'grey-text'}>12.12.2022</p>
                </div>
            </div>
        </div>
    );
};

export default PostItem;