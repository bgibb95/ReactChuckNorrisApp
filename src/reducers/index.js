import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import joke from './jokeReducer';

export default combineReducers({
  categories,
  joke,
});
