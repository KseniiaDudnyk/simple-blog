import React from 'react';
import { GetServerSideProps } from 'next';
import { getAllPosts } from './api/posts-api';
import PostOverview from '../components/post-overview/post.overview.component';

type HomeProps = {
    allPostsData: Post[];
};

const Home: React.FC<HomeProps> = ({ allPostsData }) => (
    <div>
        {allPostsData.map((post) => (
            <PostOverview key={post.id} post={post} />
        ))}
    </div>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
    const allPostsData = await getAllPosts();

    return {
        props: {
            allPostsData,
        },
    };
};
