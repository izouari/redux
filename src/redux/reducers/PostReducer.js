import { fetchPost, FETCH_POST, FETCH_POST_ACCESS, FETCH_POST_FAILURE } from "../actions/PostsAction";

const initialState = {
    isPostLoading: false,
    posts: [],
    error: ''
}

export const PostReducer = (state = initialState, action ) => {
    console.log('call to PostReducer ', action)
    switch (action.type) {
        case FETCH_POST: console.log('call to PostReducer FETCH_POST ', action) ; return {
            ...state,
            isPostLoading: true
        }
        case FETCH_POST_ACCESS: console.log('call to PostReducer FETCH_POST_ACCESS ', action) ; return {
            ...state,
            isPostLoading: false,
            posts: [...action.payload]
        }
        case FETCH_POST_FAILURE:  console.log('call to PostReducer FETCH_POST_FAILURE ', action) ; return {
            ...state,
            isPostLoading: false,
            error: action.payload
        }
        default:
            return state;
    }
}