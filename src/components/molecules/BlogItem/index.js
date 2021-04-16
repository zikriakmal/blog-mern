import React from 'react';
import { RegisterBg } from '../../../assets';
import './blogitem.scss';

const BlogItem  = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post"/>
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="subtitle">Author Date post</p>
                <p className="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn</p>
            </div>
        </div>
    )
}

export default BlogItem 
