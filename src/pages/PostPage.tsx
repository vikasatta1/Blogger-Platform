import React from 'react';
import vector from '../assets/rectangle-right.svg';
import arrowLeft from '../assets/arrow-left.svg';


const PostPage = () => {
    return (
        <>
            <div className={'main-header'}>
                <div className={'main-header__item-page'}>
                    <h2>Posts</h2>
                    <img src={vector} alt={'vector'} className={'rectangle-right__item-page'}/>
                    <p className={''}>Back-end blog</p>
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
                        Back-end blog
                    </p>
                </div>
                <div className="options-post">
                    <div className="options-post__name">
                        <h2>First day at the office</h2>
                        <p>(for public posts)</p>
                    </div>
                    <div className="options-post__date">
                        <p>12/12/2022 at 15:46:22</p>
                    </div>

                </div>
                <div className={'banner_post-page'}>

                </div>
                <div className={'post-text'}>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, magna felis vestibulum metus aptent
                        velit,
                        tempor posuere natoque habitasse phasellus dignissim.</p>

                    <p> Nec libero purus etiam venenatis velit cras nascetur euismod ornare sodales, ex ut augue sed
                        vestibulum molestie dis quisque laoreet, tempor ullamcorper mus odio nostra est dolor magna
                        justo.</p>

                    <p> Lorem ipsum dolor sit amet consectetur adipiscing elit, magna felis vestibulum metus aptent
                        velit,
                        tempor posuere natoque habitasse phasellus dignissim.</p>

                    <p> Nec libero purus etiam venenatis velit cras nascetur euismod ornare sodales, ex ut augue sed
                        vestibulum molestie dis quisque laoreet, tempor ullamcorper mus odio nostra est dolor magna
                        justo.</p>
                </div>
            </div>

        </>
    );
};

export default PostPage;