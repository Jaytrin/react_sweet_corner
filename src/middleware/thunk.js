export default store => next => action => {
    if(typeof action !=='function'){
        return next(action); //if not a function, we arent doing anything with this middleware
    } 

    return action(store.dispatch);
}