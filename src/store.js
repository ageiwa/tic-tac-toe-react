function store(state = {order: 'X'}, action) {
    if (action.type === 'X') {
        return {order: 'X'}
    }
    else if (action.type === 'O') {
        return {order: 'O'}
    }
}

export default store;