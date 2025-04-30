import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';

export default function Navbar() {
  const navigate = useNavigate();

  const lsbtnHandleClick = () => {
    navigate('/login');
  };

  const homeHandleClick = () => {
    navigate('/');
  };

  const profileHandleClick = () => {
    navigate('/profile');
  };

  const startHandleClick = () => {
    navigate('/game');
  };

  return (
    <div className={styles.btns}>
      <button type="button" onClick={lsbtnHandleClick}>
        Login/Sign-Up
      </button>
      <button type="button" onClick={homeHandleClick}>
        Home
      </button>
      <button type="button" onClick={profileHandleClick}>
        My Profile
      </button>
      <button type="button" onClick={startHandleClick}>
        Start Game
      </button>
    </div>
  );
}
