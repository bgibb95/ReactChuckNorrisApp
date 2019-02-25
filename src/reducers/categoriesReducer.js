import {
  FETCH_CATEGORIES, FETCHED_CATEGORIES, FETCH_ERROR,
} from '../actions/types';

const initialState = {
  categories: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case FETCHED_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
