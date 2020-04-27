const myLogger = store => next => action => {
    console.log(action.type);
    console.log('\tPrev: ', store.getState());
    const result = next(action);
    console.log('\tNext: ', store.getState());
    return result;
}
export default myLogger;