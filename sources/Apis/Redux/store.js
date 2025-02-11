import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middleware = [thunk];

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
}, applyMiddleware(...middleware));

const dispatch = store.dispatch

export { dispatch }
export default store;