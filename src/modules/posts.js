import * as postAPI from '../api/posts';
import { reducerUtils, handledAsyncActions, handledAsyncActionsById, createPromiseSaga, createPromiseSagaById } from '../lib/asyncUtils';
import { takeEvery } from 'redux-saga/effects';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

const CLEAR_POST = 'CLEAR_POST';

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({ type: GET_POST, payload: id, meta: id });

export const goToHome = () => (dispatch, getState, { history }) => { history.push('/') };

const initialState = {
    posts: reducerUtils.initial(),
    // post: reducerUtils.initial()
    post: {}
}

const getPostsSaga = createPromiseSaga(GET_POSTS, postAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postAPI.getPostById);

// function* getPostsSaga() {
//     try {
//         const posts = yield call(postAPI.getPosts);
//         yield put({ type: GET_POSTS_SUCCESS, payload: posts });
//     } catch (e) {
//         yield put({ type: GET_POSTS_ERROR, payload: e, error: true });
//     }
// }
// function* getPostSaga(action) {
//     const id = action.payload;
//     try {
//         const post = yield call(postAPI.getPostById, id);
//         yield put({ type: GET_POST_SUCCESS, payload: post, meta: id });
//     } catch (e) {
//         yield put({ type: GET_POST_ERROR, payload: e, error: true, meta: id });
//     }
// }
export function* postsSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga);
    yield takeEvery(GET_POST, getPostSaga);
}

const getPostsReducer = handledAsyncActions(GET_POSTS, 'posts', true);
// const getPostReducer = handledAsyncActions(GET_POST, 'post');
const getPostReducer = handledAsyncActionsById(GET_POST, 'post', true);

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return getPostReducer(state, action);
        case CLEAR_POST:
            return { ...state, post: reducerUtils.initial() };
        default: return state;
    }
}