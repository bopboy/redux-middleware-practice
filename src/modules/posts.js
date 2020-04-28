import * as postAPI from '../api/posts';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = () => async dispatch => {
    dispatch({ type: GET_POSTS });
    try {
        const posts = await postAPI.getPosts();
        dispatch({ type: GET_POSTS_SUCCESS, posts });
    } catch (e) {
        dispatch({ tpye: GET_POSTS_ERROR, error: e });
    }
}
export const getPost = () => async dispatch => {
    dispatch({ type: GET_POST });
    try {
        const post = await postAPI.getPostById();
        dispatch({ type: GET_POST_SUCCESS, post });
    } catch (e) {
        dispatch({ tpye: GET_POST_ERROR, error: e });
    }
}