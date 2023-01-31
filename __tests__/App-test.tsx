/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render, fireEvent} from '@testing-library/react-native';

describe('App', () => {
  it('renders the input and add button', () => {
    const {getByPlaceholderText, getByText} = render(<App />);
    expect(getByPlaceholderText('Add a todo')).toBeTruthy();
    expect(getByText('Add')).toBeTruthy();
  });

  it('adds a todo', () => {
    const {getByPlaceholderText, getByText} = render(<App />);
    const input = getByPlaceholderText('Add a todo');
    fireEvent.changeText(input, 'Buy milk');

    const addButton = getByText('Add');
    fireEvent.press(addButton);

    expect(getByText('Buy milk')).toBeTruthy();
  });
});
