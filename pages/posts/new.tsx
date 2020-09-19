import { NextPage } from 'next';
import React from 'react';
import { useDispatch } from 'react-redux';
import { makeNewPost } from '../api/posts-api';
import { createPost } from '../../redux/actions';
import NewPost from '../../components/new-post/new-post.component';

const New: NextPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = (title: string, body: string): void => {
        makeNewPost(title, body).then((res) => dispatch(createPost(res)));
    };

    return <NewPost onSubmit={handleSubmit} />;
};

export default New;
