import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { BlogActionTypes } from './action.types';

export type InitialState = {
    posts: Post[];
};

const initialState: InitialState = {
    posts: [],
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
        default:
            return state;
    }
};

export default reducer;
