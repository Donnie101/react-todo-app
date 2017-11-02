
const errorRducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_ERROR':
            return 'ITEM ALREADY ADDED'

        case 'NO_ERROR':
            return '';

        default:
            return state;
    }
}

export default errorRducer;