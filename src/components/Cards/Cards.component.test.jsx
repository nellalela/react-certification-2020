import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards.component';

describe('Card list component', () => {
  it('Displays the cards with the videos information', () => {
    render(<Cards />);

    expect(screen.getAllByRole('heading').length).toBe(25);
  });
});
