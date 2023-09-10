import { combineReducers } from 'redux';
import searchReducer from './searchReducer.tsx';

const rootReducer = combineReducers({
    search: searchReducer,
})
export default rootReducer;
