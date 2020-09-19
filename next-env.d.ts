/// <reference types="next" />
/// <reference types="next/types/global" />

type Post = {
    id: number;
    title: string;
    body: string;
    comments?: PostComment[];
};

type PostComment = {
    id: number;
    postId: number;
    body: string;
};

type PostProps = {
    post: Post;
};
