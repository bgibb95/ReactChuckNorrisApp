import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Categories } from './Categories';

describe('Categories page', () => {
  const props = {
    fetchCategories: jest.fn(),
    categories: ['dev'],
    loading: false,
  };

  test('It matches the snapshot', () => {
    const component = create(<MemoryRouter><Categories {...props} /></MemoryRouter>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Should call getCategories on mount', () => {
    expect(props.fetchCategories).toHaveBeenCalled();
  });
});
