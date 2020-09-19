import { createStore } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import reducer, { InitialState } from './redux/reducer';

const makeStore: MakeStore<InitialState> = () => {
    return createStore(reducer);
};

export const wrapper = createWrapper<InitialState>(makeStore, { debug: true });
