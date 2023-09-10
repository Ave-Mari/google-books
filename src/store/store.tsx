import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from '../reducer/reducers';
import thunk from 'redux-thunk'; 

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;