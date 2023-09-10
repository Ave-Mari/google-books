import axios from 'axios';
import { Dispatch } from 'redux';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store/store';
import ListOfBooks from '../components/ListOfBooks/ListOfBooks';

interface Book {
    id: string,
    author: string,
    title: string,
    image: string,
    category: string
}

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const searchBooksRequest = () => ({
    type: 'SEARCH_BOOKS_REQUEST',
  });
  
export const searchBooksSuccess = (books: Book[]) => ({
    type: 'SEARCH_BOOKS_SUCCESS',
    payload: books,
  });
  
export const searchBooksError = (error: string) => ({
    type: 'SEARCH_BOOKS_ERROR',
    payload: error,
  });
  

export const searchBooks = (searchParams: {
    search: string,
    category: string,
    sortBy: string
}): AppThunk => {
    return async (dispatch: Dispatch) => {
        dispatch(searchBooksRequest());
        try {
            const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
            if (!apiKey) {
                throw new Error('API key is underfined')
            }
            const { search, category, sortBy } = searchParams;
            const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&subject=${category}&orderBy=${sortBy}&key=${apiKey}`;

            const res = await axios.get(url);            

            const booksList: any[] = res.data.items || [];

            const books: Book[] = booksList.map((booksList: any) => ({
                id: booksList.id,
                author: booksList.volumeInfo.authors?.[0],
                title: booksList.volumeInfo.title,                
                image: booksList.volumeInfo.imageLinks.smallThumbnail,
                category: booksList.volumeInfo.categories?.[0]
            }))
    
            dispatch(searchBooksSuccess(books));
        } catch (error) {
            dispatch(searchBooksError('Search error :('));
        }
}
}

