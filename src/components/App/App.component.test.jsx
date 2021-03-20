import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('page App', () => {
  it('Displays app page', () => {
    render(<App />);
    expect(screen.getByText('Wizeline Project')).toBeTruthy();
    expect(screen.getAllByRole('heading').length).toBe(25);
  });
});