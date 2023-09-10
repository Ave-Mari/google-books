import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
    books: Book[];
    loading: boolean;
    error: string | null
}

const initialState: SearchState = {
    books: [],
    loading: false,
    error: null
}

const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SEARCH_BOOKS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'SEARCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case 'SEARCH_BOOKS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
    }

}

export default searchReducer;