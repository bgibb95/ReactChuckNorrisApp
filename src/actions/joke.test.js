import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { FETCH_JOKE, FETCHED_JOKE } from './types';
import fetchJokeFromCategory from './joke';

describe('Fetch joke from category action', () => {
  let store;
  let httpMock;

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    httpMock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    store = mockStore({});
  });

  const joke = {
    category: ['dev'],
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'lkor-8baqmcjoftr-am_qw',
    url: 'https://api.chucknorris.io/jokes/lkor-8baqmcjoftr-am_qw',
    value: 'Project managers never ask Chuck Norris for estimations... ever.',
  };

  const category = 'dev';

  it('Fetches cateogries', async () => {
    // given
    httpMock.onGet(`https://api.chucknorris.io/jokes/random?category=${category}`).reply(200, joke);
    // when
    fetchJokeFromCategory(category)(store.dispatch);
    await flushAllPromises();
    // then
    expect(store.getActions()).toEqual(
      [
        { type: FETCH_JOKE },
        { type: FETCHED_JOKE, payload: joke },
      ],
    );
  });
});
