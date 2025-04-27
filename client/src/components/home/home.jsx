import React from 'react';
import styles from './home.modules.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Quizadillo:</h1>
      <h3 className={styles.subtitle}>Your Trivia Quiz Practice Game</h3>
      <a>
        <img src="../../assets/logo.png" alt="Quizadillo"></img>
      </a>

      <div className={styles.buttons}>
        <button>Login/Sign-Up</button>
        <button>Home</button>
        <button>Go to My Profile</button>
        <button>Start Game</button>
      </div>

      <p className={styles.tagLine}>Get better at Trivia - Impress those worth impressing</p>
    </div>
  );
}
