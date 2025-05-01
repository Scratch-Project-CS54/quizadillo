import React, { useEffect, useState } from 'react';
import styles from './profile.module.css';

export default function Profile() {
  const [quizResult, setQuizResult] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | any>(null);

  //! will need to fetch from database the number of questions the right questions etc.
  useEffect(() => {
    const fetchQuizResults = async () => {
      try {
        const response = await fetch('http://localhost:4000/history');
        if (!response.ok) {
          throw new Error('Failed to fetch quiz results');
        }
        const data = await response.json();
        console.log(data);
        setQuizResult(data);
        console.log(quizResult);
      } catch (err: any) {
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

  // const score = quizResult.score;
  // const totalQuestions = quizResult.totalQuestions;
  // const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div>
      <h1 className={styles.title}>My Profile</h1>

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
          {quizResult.map((item: any, index:any) => (
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
