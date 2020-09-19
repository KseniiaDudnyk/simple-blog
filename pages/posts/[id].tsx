import React from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { getPostDetails } from '../api/posts-api';
import { InitialState } from '../../redux/reducer';
import { getCurrentPostDetails } from '../../redux/actions';
import PostDetails from '../../components/post-details/post-details.component';

const Post: NextPage = () => {
    const postDetails = useSelector((state: InitialState) => state.currentPost);

    return (
        <div>
            <PostDetails key={postDetails.id} post={postDetails} />
        </div>
    );
};

Post.getInitialProps = async ({ store, query }) => {
    const postDetails = await getPostDetails(query.id.toString());

    store.dispatch(getCurrentPostDetails(postDetails));

    return {};
};

export default Post;
