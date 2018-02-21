const reducer = function (state=[], action) {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            let todos = state.concat(action.todos);
            return todos;
        case 'ADD':
            let newstate = state.concat(action.todo);
            return newstate;
        case 'DELETE':
            let newState = state.filter((item) => {
                if(item.id == action.id) {
                    return false;
                }
                else {
                    return true;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default reducer;