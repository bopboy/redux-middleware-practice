export const reducerUtils = {
    initial: (data = null) => ({ data, loading: false, error: null }),
    loading: (prevState = null) => ({ data: prevState, loading: true, error: null }),
    success: data => ({ data, loading: false, error: null }),
    error: error => ({ data: null, loading: true, error })
};

export const createPromiseThunk = (type, promiseCreater) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return param => async dispatch => {
        dispatch({ type });
        try {
            const payload = await promiseCreater(param);
            dispatch({ type: SUCCESS, payload });
        } catch (e) {
            dispatch({ type: ERROR, payload: e, error: true });
        }
    }
}