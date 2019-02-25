import axios from 'axios';
import {
  FETCHED_CATEGORIES, FETCH_CATEGORIES, FETCH_ERROR,
} from './types';

const fetchCategories = () => async (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES });
  try {
    const { data: categories } = await axios('https://api.chucknorris.io/jokes/categories');
    dispatch({ type: FETCHED_CATEGORIES, payload: categories });
  } catch (err) {
    dispatch({ type: FETCH_ERROR });
  }
};

export default fetchCategories;
