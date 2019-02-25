import {
  FETCH_JOKE, FETCHED_JOKE, FETCH_ERROR,
} from '../actions/types';

const initialState = {
  joke: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_JOKE:
      return {
        ...state,
        loading: true,
      };
    case FETCHED_JOKE:
      return {
        ...state,
        joke: action.payload,
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
