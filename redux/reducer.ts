import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { BlogActionTypes } from './action.types';

export type InitialState = {
    posts: Post[];
    currentPost: Post;
};

const initialState: InitialState = {
    posts: [],
    currentPost: null,
};

const reducer = (state: InitialState = initialState, action: AnyAction): InitialState => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };

        return nextState;
    }

    switch (action.type) {
        case BlogActionTypes.GET_POSTS:
            return { ...state, posts: action.payload };
        case BlogActionTypes.GET_POST_DETAILS:
            return { ...state, currentPost: action.payload };
        case BlogActionTypes.CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        default:
            return state;
    }
};

export default reducer;
