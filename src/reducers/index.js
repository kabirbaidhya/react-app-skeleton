
import {combineReducers} from 'redux';
import error from './error';
import freeze from './freeze';

let reducer = combineReducers({
    error,
    freezed: freeze,
});

export default reducer;
