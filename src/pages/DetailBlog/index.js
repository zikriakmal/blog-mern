import React from 'react';
import { RegisterBg } from '../../assets';
import './detailblog.scss';
const DetailBlog = () => {
    return (
        <div className="detail-blog-wrapper">
            <img className="image-cover" src={RegisterBg} alt="thumbnail"/>
            <p className="blog-title">Title Blog</p> 
            <p className="blog-subtitle">Author - Post Date</p>
            <p className="blog-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae risus facilisis, posuere nibh sed, gravida diam. Nunc sagittis et felis vel pulvinar. In laoreet justo lacinia nulla pellentesque, ut semper dolor bibendum. Donec a placerat nisl. Vivamus viverra, risus eget finibus sodales, urna massa malesuada leo, ac ornare erat massa id lectus. Sed a sem ac augue bibendum facilisis a a lectus. Vestibulum faucibus pretium ipsum sit amet iaculis.</p>
        </div>
    )
}

export default DetailBlog
