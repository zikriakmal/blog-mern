import React from 'react'
import { BlogItem, Button, Gap } from '../../components';
import './home.scss';
const Home = () => {
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="create blog"/>
            </div>
            <div className="content-wrapper">
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
            </div>
            <Gap height={20}/> 
            <div className="pagination-wrapper">
                <Button title="Previous" />
                <Gap width={10}/>
                <Button title="Next" />
            </div>
            <Gap height={20}/> 
        </div>
    )
}

export default Home
