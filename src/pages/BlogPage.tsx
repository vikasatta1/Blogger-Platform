import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import vector from '../assets/vector-button.svg';
import arrowLeft from "../assets/arrow-left.svg";

const BlogPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    return (
        <>
            <div className={'main-header'}>
                <div className={'main-header__item-page'}>
                    <h2>Posts</h2>
                    <img src={vector} alt={'vector'} className={'rectangle-right__item-page'}/>
                    <p className={''}>The best blog in our village</p>
                </div>
            </div>
            <div className={'link-back__blog-page'}>
                <img src={arrowLeft} alt={'arrowLeft'} className={'arrowLeft'}/>
                <p>Back to posts</p>
            </div>
            <div className="banner-blog">

            </div>
            <div className={'margin-right'}>
            <div className={'blogItem-wrap__blog-page'}>
                <div className={'blog-wrap'}>
                <div className="blogItem-logo-wrap">
                    <div className={'blogItem-logo__blog-page'}>

                    </div>
                </div>
                <div className="blogItem-content__blog-page">
                    <h2>The best blog in our village</h2>
                    <p className={'date'}>Blog creation date:<span> 12.12.2022</span></p>
                    <p className={'p-web'}>Website: <a>https://www.youtube.com/</a></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor...</p>
                </div>
                </div>
                <div className={'button-wrap__blog-page'}>
                    <button>Show more <img  className={'vector-button-blog-page'} src={vector} alt={'vector'}/></button>
                </div>
            </div>

            <div className='wrap-blogs__blog-page'>
                <div className={'postItem'}>
                    <div className="postItem-imgBig">
                    </div>
                    <div className="postItem-description">
                        <div className="description-text">
                            <h3>Let's fly into space</h3>
                            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit...</p>
                            <p className={'grey-text'}>12.12.2022</p>
                        </div>
                    </div>
                </div>

                <div className={'postItem'}>
                    <div className="postItem-imgBig">
                    </div>
                    <div className="postItem-description">
                        <div className="description-text">
                            <h3>Let's fly into space</h3>
                            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit...</p>
                            <p className={'grey-text'}>12.12.2022</p>
                        </div>
                    </div>
                </div>

                <div className={'form-item'}>
                    <div className="postItem-imgBig">
                    </div>
                    <div className="postItem-description">
                        <div className="description-text">
                            <h3>Let's fly into space</h3>
                            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit...</p>
                            <p className={'grey-text'}>12.12.2022</p>
                        </div>
                    </div>
                </div>

                <div className={'form-item'}>
                    <div className="postItem-imgBig">
                    </div>
                    <div className="postItem-description">
                        <div className="description-text">
                            <h3>Let's fly into space</h3>
                            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit...</p>
                            <p className={'grey-text'}>12.12.2022</p>
                        </div>
                    </div>
                </div>

                <div className={'form-item'}>
                    <div className="postItem-imgBig">
                    </div>
                    <div className="postItem-description">
                        <div className="description-text">
                            <h3>Let's fly into space</h3>
                            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit...</p>
                            <p className={'grey-text'}>12.12.2022</p>
                        </div>
                    </div>
                </div>

                <div className={'form-item'}>
                    <div className="postItem-imgBig">
                    </div>
                    <div className="postItem-description">
                        <div className="description-text">
                            <h3>Let's fly into space</h3>
                            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit...</p>
                            <p className={'grey-text'}>12.12.2022</p>
                        </div>
                    </div>
                </div>


            </div>
            </div>
            <div className={'button-wrap'}>
                <button>Show more <img  className={'vector-button'} src={vector} alt={'vector'}/></button>
            </div>
        </>
    );
};

export default BlogPage;