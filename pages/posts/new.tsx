import { NextPage } from 'next';
import React from 'react';
import NewPost from '../../components/new-post/new-post.component';
import { makeNewPost } from '../api/posts-api';

const New: NextPage = () => {
    const handleSubmit = (title: string, body: string): void => {
        makeNewPost(title, body);
    };

    return <NewPost onSubmit={handleSubmit} />;
};

export default New;
