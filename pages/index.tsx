import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { NextPage } from 'next';
import { getAllPosts } from './api/posts-api';
import { getPosts } from '../redux/actions';
import { InitialState } from '../redux/reducer';
import PostOverview from '../components/post-overview/post-overview.component';
import Button from '@material-ui/core/Button';

const Home: NextPage = () => {
    const posts = useSelector((state: InitialState) => state.posts);

    return (
        <div className="container">
            <Link href={'/posts/new'}>
                <Button className="make-new-post-btn" variant="outlined" size="small" color="inherit">
                    Make new post
                </Button>
            </Link>

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
