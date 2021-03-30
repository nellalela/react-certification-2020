import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput.component';

describe('Card list component', () => {
  it('Displays the cards with the videos information', () => {
    render(<SearchInput />);

    expect(screen.getByPlaceholderText('Search...')).toBeTruthy();
  });
});
