import { BlogActionTypes } from './action.types';

export const getPosts = (posts: Post[]) => ({
    type: BlogActionTypes.GET_POSTS,
    payload: posts,
});
