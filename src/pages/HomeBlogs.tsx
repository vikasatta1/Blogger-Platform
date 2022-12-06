import React from 'react';
import {blogs} from "../redux/blogs";

const HomeBlogs = () => {
    return (
        <>
            <div className={'main-header'}>
                <h2>Blogs</h2>
            </div>
            <div className={'page-content'}>
            <div className={'search'}>
                <input/>
                <select>
                    <option value="value1">New blogs first</option>
                    <option value="value2">Old blogs first</option>
                    <option value="value3">From A to Z</option>
                    <option value="value4">From Z to A</option>
                </select>
            </div>
            <div className={'blogs'}>
              {/*  {blogs.map(b =>
                    <BlogItem
                        key={b.id}
                        id={b.id}
                        name={b.name}
                        description={b.description}
                        websiteUrl={b.websiteUrl}
                    />)}*/}
            </div>
            </div>
            <div className={'button'}>
                <button>Show more</button>
            </div>

        </>
    );
};

export default HomeBlogs;