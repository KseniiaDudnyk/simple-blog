import React from 'react';
import { useSelector } from 'react-redux';
import { NextPage } from 'next';
import { getAllPosts } from './api/posts-api';
import { getPosts } from '../redux/actions';
import PostOverview from '../components/post-overview/post.overview.component';

const Home: NextPage = () => {
    const posts = useSelector((state) => state.posts);

    return (
        <div>
            {posts.map((post) => (
                <PostOverview key={post.id} post={post} />
            ))}
        </div>
    );
};

Home.getInitialProps = async ({ store }) => {
    const allPostsData = await getAllPosts();

    store.dispatch(getPosts(allPostsData));

    return {};
};

export default Home;
