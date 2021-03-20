import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar.component';

describe('component Navbar', () => {
  it('displays Navbar elements', () => {
    render(<Navbar />);

    expect(screen.getByRole('navigation')).toBeTruthy();
    expect(screen.getByText('Wizeline Project')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'open side menu' })).toBeTruthy();
    expect(screen.getByText('Dark Mode')).toBeTruthy();
    expect(screen.getByRole('img', { name: 'avatar' })).toBeTruthy();

  });
});