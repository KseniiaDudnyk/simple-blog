/// <reference types="next" />
/// <reference types="next/types/global" />

type Post = {
    id: number;
    title: string;
    body: string;
    comments?: Comment[];
};

type Comment = {
    id: number;
    postId: number;
    body: string;
};
