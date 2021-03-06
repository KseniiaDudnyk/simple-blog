import { BlogActionTypes } from './action.types';

export const getPosts = (posts: Post[]) => ({
    type: BlogActionTypes.GET_POSTS,
    payload: posts,
});

export const getCurrentPostDetails = (post: Post) => ({
    type: BlogActionTypes.GET_POST_DETAILS,
    payload: post,
});

export const createPost = (post: Post) => ({
    type: BlogActionTypes.CREATE_POST,
    payload: post,
});
