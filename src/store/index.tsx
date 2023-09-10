import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../reducer/reducers'

export default configureStore({
    reducer: searchReducer
})