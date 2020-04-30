import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Post from '../components/Post';
import { getPost, goToHome } from '../modules/posts';
import { reducerUtils } from "../lib/asyncUtils";

function PostContainer({ postId }) {
    const { data, loading, error } = useSelector(state => state.posts.post[postId] || reducerUtils.initial());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(postId));
        // return () => { dispatch(clearPost()) };
    }, [postId, dispatch]);

    if (loading && !data) return <div>loading...</div>;
    if (error) return <div> somgthing wrong!!!</div>;
    if (!data) return null

    return (
        <>
            <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
            <Post post={data} />
        </>
    );
}

export default PostContainer;
