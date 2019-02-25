import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Joke } from './Joke';

Enzyme.configure({ adapter: new Adapter() });

describe('Joke page', () => {
  const props = {
    match: { params: { category: 'dev' } },
    fetchJokeFromCategory: jest.fn(),
    joke: {},
    loading: false,
  };

  const component = create(<MemoryRouter><Joke {...props} /></MemoryRouter>);

  test('It matches the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Should call getJoke on mount', () => {
    expect(props.fetchJokeFromCategory).toHaveBeenCalled();
  });

  test('Should call getJoke on button click', () => {
    const wrapper = mount(<MemoryRouter><Joke {...props} /></MemoryRouter>);
    wrapper.find('button').at(0).simulate('click');
    expect(props.fetchJokeFromCategory).toHaveBeenCalledTimes(3);
  });
});
