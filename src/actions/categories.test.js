import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { FETCH_CATEGORIES, FETCHED_CATEGORIES } from './types';
import fetchCategories from './categories';

describe('Fetch category action', () => {
  let store;
  let httpMock;

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    httpMock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    store = mockStore({});
  });

  const categories = ['explicit'];

  it('Fetches cateogries', async () => {
    // given
    httpMock.onGet('https://api.chucknorris.io/jokes/categories').reply(200, categories);
    // when
    fetchCategories()(store.dispatch);
    await flushAllPromises();
    // then
    expect(store.getActions()).toEqual(
      [
        { type: FETCH_CATEGORIES },
        { type: FETCHED_CATEGORIES, payload: categories },
      ],
    );
  });
});
