import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './Card.component';

const cardMock = {
  title: 'card-title',
  description: 'Description',
  url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
};

describe('component Card', () => {
  it(' display Card elements', () => {
    render(<Card {...cardMock} />);

    const titleTest = screen.getByTestId('card-title');

    expect(screen.getByText(cardMock.title)).toBeTruthy();
    expect(screen.getByText(cardMock.description)).toBeTruthy();
    expect(screen.getByRole('img')).toBeTruthy();
    expect(titleTest.textContent).toEqual(cardMock.title);
  });
});
