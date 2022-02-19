import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
  test('clicking button counts up', () => {
    render(<App />);

    screen.getByText('Click me : 0').click();
    expect(screen.getByText('Click me : 1')).toBeInTheDocument();
  });
});
