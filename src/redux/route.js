import { combineEpics } from 'redux-observable';
import {fetchPostsEpics} from './epics/PostsEpics';

export const rootEpics = combineEpics(fetchPostsEpics)