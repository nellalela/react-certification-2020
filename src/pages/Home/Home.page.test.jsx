import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home.page';

it('renders the videos', () => {
  render(<Home />);

  expect(screen.getAllByRole('heading').length).toBe(25);
});
