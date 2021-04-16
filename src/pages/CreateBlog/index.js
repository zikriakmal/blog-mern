import React from 'react';
import { Button, Gap, Input, TextArea, Upload } from '../../components';
import './createblog.scss';

const CreateBlog = () => {
    return (
        <div className="create-blog-wrapper">
            <p className="title">Create New Blog Post</p>
            <Input label="Post Title" />
            <Upload />
            <TextArea/>
            <Gap height={20}/>
            <div className="button-action">
                <Button title="Save" />
            </div>
        </div>
    )
}

export default CreateBlog
