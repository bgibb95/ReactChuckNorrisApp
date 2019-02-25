import categoriesReducer from './categoriesReducer';
import * as types from '../actions/types';

it('Returns initial state', () => {
  expect(categoriesReducer(undefined, {})).toEqual({
    categories: [],
    loading: false,
  });
});

it('Should handle FETCHED_CATEGORIES', () => {
  const initialState = {
    categories: [],
    loading: false,
  };
  const categoryArray = ['explicit'];
  const action = {
    type: types.FETCHED_CATEGORIES,
    payload: categoryArray,
  };
  const afterState = categoriesReducer(initialState, action);
  expect(afterState).toEqual({
    categories: categoryArray,
    loading: false,
  });
});
