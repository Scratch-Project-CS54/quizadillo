import React, { useEffect, useState } from 'react';
import QuestionCard from '../questioncard/questioncard';
import styles from './game.module.css';

export default function Game() {
  const [questions, setQuestions] = useState([]); // store list of all fetched questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // when the page loads
    getQuestions();
  }, []);

  function getQuestions() {
    //const randomQ = Math.floor(Math.random() * 50);
<<<<<<< HEAD
    fetch('http://localhost:5000/questions')
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data); // data is an array of questions!
=======
    fetch('http://localhost:5000/api/trivia/questions')
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data); // data is an array of questions!
        setLoading(false);
>>>>>>> aaabb58 (game page done, pending for test)
        console.log(data);
      })
      .catch((err) => console.error(err));
  }

  function handleAnswer(answer) {
<<<<<<< HEAD
    if (answer === questions[currentQuestionIndex].correct_answer) setScore((prev) => prev + 1);

    setCurrentQuestionIndex((prev) => prev + 1);
  }

  return (
    <div>
      <QuestionCard questionObj={questions[currentQuestionIndex]} handleAnswer={handleAnswer} />
=======
    if (answer === questions[currentQuestionIndex].correct_answer)
      setScore((prev) => prev + 1);

    setCurrentQuestionIndex((prev) => prev + 1);
  }

  if (currentQuestionIndex >= questions.length)
    return <h2>Game Over! Final Score: {score}</h2>;

  return (
    <div>
      <QuestionCard
        questionObj={questions[currentQuestionIndex]}
        handleAnswer={handleAnswer}
      />
>>>>>>> aaabb58 (game page done, pending for test)

      <p>Score: {score}</p>
    </div>
  );
}
