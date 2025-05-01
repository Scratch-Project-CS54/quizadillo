import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../navbar';
import { useNavigate } from 'react-router-dom';

import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('Navbar', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
  });

  it('should render all buttons', () => {
    render(<Navbar />);
    expect(screen.getByText(/Login\/Sign-Up/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/My Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/Start Game/i)).toBeInTheDocument();
  });

  it('should navigate to /login when Login/Sign-Up clicked', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByText(/Login\/Sign-Up/i));
    expect(mockedNavigate).toHaveBeenCalledWith('/login');
  });

  it('should navigate to / when Home clicked', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByText(/Home/i));
    expect(mockedNavigate).toHaveBeenCalledWith('/');
  });

  it('should navigate to /profile when My Profile clicked', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByText(/My Profile/i));
    expect(mockedNavigate).toHaveBeenCalledWith('/profile');
  });

  it('should navigate to /game when Start Game clicked', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByText(/Start Game/i));
    expect(mockedNavigate).toHaveBeenCalledWith('/game');
  });
});
