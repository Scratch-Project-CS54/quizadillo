import React from 'react';
import { useState } from 'react';
import styles from './login.module.css';

export default function Login() {
  const [action, setAction] = useState('Sign Up');
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const url =
      action === 'Sign Up'
        ? 'http://localhost:3000/api/signup'
        : 'http://localhost:3000/api/login';

    const body = { username, pw };
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`${action} failed!`);
      }
      const data = await res.json();
      console.log(`${action} success!`, data);
    } catch (err) {
      console.error(`Error in ${action}`, err);
    }
  }
  return (
    <div className={styles.login}>
      <h1>
        quizadillo <br />
        {action}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPw(e.target.value)}
        />
        <button type='submit'>{action}</button>

        <div>
          {action === 'Sign Up' ? (
            <p>
              Alreay have an account?{' '}
              <button onClick={() => setAction('Log In')}>Log In</button>
            </p>
          ) : (
            <p>
              New here?{' '}
              <button onClick={() => setAction('Sign Up')}>Sign Up</button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
