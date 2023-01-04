import React from 'react';
import {blogs} from "../redux/blogs";
import BlogItem from "../components/blogItem/BlogItem";
import vector from "../assets/vector-button.svg";

const HomeBlogs = () => {
    return (
        <>
            <div className={'main-header'}>
                <h2>Blogs</h2>
            </div>
            <div className={'page-content'}>
            <div className={'search'}>
                <input className={'input-blogs'} placeholder={'Search'} />
                <select>
                    <option value="value1">New blogs first</option>
                    <option value="value2">Old blogs first</option>
                    <option value="value3">From A to Z</option>
                    <option value="value4">From Z to A</option>
                </select>
            </div>
            <div className={'blogs'}>
              {blogs.map(b =>
                    <BlogItem
                        key={b.id}
                        id={b.id}
                        name={b.name}
                        description={b.description}
                        websiteUrl={b.websiteUrl}
                    />)}

            </div>
            </div>
            <div className={'button-wrap'}>
                <button>Show more <img  className={'vector-button'} src={vector} alt={'vector'}/></button>
            </div>

        </>
    );
};

export default HomeBlogs;