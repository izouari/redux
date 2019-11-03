export const FETCH_POST = 'FETCH_POST'
export const FETCH_POST_ACCESS= 'FETCH_POST_ACCESS'
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'

export const fetchPost = () => {
    console.log('call to action fetchPost')
    return {
        type: FETCH_POST
    }
}

export const fetchPostAccess = (post) => {
    console.log('call to action fetchPostAccess')
    return {
        type: FETCH_POST_ACCESS,
        payload: post
    }
}

export const fetchPostFailure = (error) => {
    return {
        type: FETCH_POST_FAILURE,
        payload: error
    }
}