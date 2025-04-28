import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';

export default function Home() {
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
    <div className={styles.page}>
      {/*prettier-ignore*/}
      <aside className={styles.btns}>
        <button type="button" onClick={(lsbtnHandleClick)}>Login/Sign-Up</button>
        <button type ="button" onClick={(homeHandleClick)}>Home</button>
        <button type ="button" onClick={(profileHandleClick)}>HMy Profile</button>
        <button type ="button" onClick={(startHandleClick)}>Start Game</button>
      </aside>

      <main className={styles.mainContent}>
        <h1 className={styles.title}>Quizadillo</h1>
        <img className={styles.logo} src="/logo.png" alt="Quizadillo Logo" />
        <p className={styles.tagLine}>Get better at Trivia — Impress those worth impressing!</p>
      </main>
    </div>
  );
}
