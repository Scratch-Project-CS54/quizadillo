import React, { useEffect, useState } from 'react';
import styles from './profile.module.css';

export default function Profile() {
  const [quizResult, setQuizResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //! will need to fetch from database the number of questions the right questions etc.
  useEffect(() => {
    const fetchQuizResults = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/trivia/getResults');
        if (!response.ok) {
          throw new Error('Failed to fetch quiz results');
        }
        const data = await response.json();
        setQuizResult(data);
      } catch (err) {
        console.error('Error fetching quiz result:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuizResults();
  }, []);

  //*This handles the state changes/notifications of errors
  if (loading) return <h2>Loading Profile...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!quizResult) return <h2>No quiz results found.</h2>;

  const score = quizResult.score;
  const totalQuestions = quizResult.totalQuestions;
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div>
      <h1 className={styles.title}>My Profile</h1>

      {/* Score Summary */}
      <table className={styles.scoreBoard}>
        <thead>
          <tr>
            <th>Score</th>
            <th>Total Questions</th>
            <th>Percentage</th>
            <th>Date Answered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{score}</td>
            <td>{totalQuestions}</td>
            <td>{percentage}%</td>
            <td>{new Date(quizResult.date).toLocaleDateString()}</td> {/*might be able to pull this from database */}
          </tr>
        </tbody>
      </table>

      {/* Question Breakdown */}
      <h2 className={styles.Subtitle}>Question Breakdown</h2>
      <table className={styles.breakdown}>
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {quizResult.history.map((item, index) => (
            <tr key={index}>
              <td>{item.question}</td>
              <td>{item.userAnswer}</td>
              <td>{item.correctAnswer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
