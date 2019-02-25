import axios from 'axios';
import {
  FETCHED_JOKE, FETCH_JOKE, FETCH_ERROR,
} from './types';

const fetchJokeFromCategory = category => async (dispatch) => {
  dispatch({ type: FETCH_JOKE });
  try {
    const { data: joke } = await axios(`https://api.chucknorris.io/jokes/random?category=${category}`);
    dispatch({ type: FETCHED_JOKE, payload: joke });
  } catch (err) {
    dispatch({ type: FETCH_ERROR });
  }
};

export default fetchJokeFromCategory;
