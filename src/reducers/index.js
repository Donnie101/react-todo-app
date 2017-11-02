import {createStore,combineReducers} from 'redux';
import todosReducer from'./todosReducer';
import errorReducer from './errorReducer';

const store = createStore(combineReducers({
    todos:todosReducer,
    error:errorReducer
}));

export default store;