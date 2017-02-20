import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'; 
import ActiveBook from './reducer_active_book'; 

// a reducer is a function that returns
//  . a piece of the global application state

const rootReducer = combineReducers({
  books: BooksReducer, 
  activeBook: ActiveBook
});

export default rootReducer;
