import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './Card.component';

const cardMock = {
  title: 'Title',
  description: 'Description',
  url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
};

describe('component Card', () => {
  it(' display Card elements', () => {
    render(<Card {...cardMock} />);

    expect(screen.getByText(cardMock.title)).toBeTruthy();
    expect(screen.getByText(cardMock.description)).toBeTruthy();
    expect(screen.getByRole('img')).toBeTruthy();
  });
});