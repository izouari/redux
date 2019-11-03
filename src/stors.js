import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { UserReducer } from './redux/reducers/UserReducer';
import { PostReducer } from './redux/reducers/PostReducer';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpics } from './redux/route';
import { fetchPostsEpics } from './redux/epics/PostsEpics';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    combineReducers({consolide: PostReducer}), 
    applyMiddleware(epicMiddleware)
    )

epicMiddleware.run(rootEpics);

export default store