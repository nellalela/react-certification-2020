import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home.page';

describe('Card list component', () => {
  it('renders the videos', () => {
    render(<Home />);

    expect(screen.getAllByRole('heading').length).toBe(25);
  });
});
