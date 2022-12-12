function store(state = {order: 'X'}, action) {
    if (action.type === 'X') {
        return {order: 'X'}
    }
    else if (action.type === 'O') {
        return {order: 'O'}
    }
    else return state;
}

export default store;