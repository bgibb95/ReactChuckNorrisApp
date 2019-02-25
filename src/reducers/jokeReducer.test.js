import jokeReducer from './jokeReducer';
import * as types from '../actions/types';

it('Returns initial state', () => {
  expect(jokeReducer(undefined, {})).toEqual({
    joke: {},
    loading: false,
  });
});

it('Should handle FETCHED_CATEGORIES', () => {
  const initialState = {
    joke: {},
    loading: false,
  };
  const jokeObject = {
    category: ['dev'],
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'lkor-8baqmcjoftr-am_qw',
    url: 'https://api.chucknorris.io/jokes/lkor-8baqmcjoftr-am_qw',
    value: 'Project managers never ask Chuck Norris for estimations... ever.',
  };
  const action = {
    type: types.FETCHED_JOKE,
    payload: jokeObject,
  };
  const afterState = jokeReducer(initialState, action);
  expect(afterState).toEqual({
    joke: jokeObject,
    loading: false,
  });
});
