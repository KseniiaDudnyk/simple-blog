import React from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { makeNewPost } from '../api/posts-api';
import { createPost } from '../../redux/actions';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import NewPost from '../../components/new-post/new-post.component';

const New: NextPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (title: string, body: string): void => {
        makeNewPost(title, body)
            .then((res) => {
                dispatch(createPost(res));
                router.push('/');
            })
            .catch(() => enqueueSnackbar('An error accrued while creating new post', { variant: 'error' }));
    };

    return <NewPost onSubmit={handleSubmit} />;
};

export default New;
