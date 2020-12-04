import { createStore } from 'redux';
import page from './reducers/index';
const initialState = { page: '' };

const store = createStore(page, initialState);

export default store;