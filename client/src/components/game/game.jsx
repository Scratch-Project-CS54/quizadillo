import React, { useEffect, useState } from 'react';
import QuestionCard from '../questioncard/questioncard';
//import styles from './game.module.css';

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
    fetch('http://localhost:5000/questions')
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data); // data is an array of questions!
        console.log(data);
      })
      .catch((err) => console.error(err));
  }

  function handleAnswer(answer) {
    if (answer === questions[currentQuestionIndex].correct_answer) setScore((prev) => prev + 1);

    setCurrentQuestionIndex((prev) => prev + 1);
  }

  return (
    <div>
      <QuestionCard questionObj={questions[currentQuestionIndex]} handleAnswer={handleAnswer} />

      <p>Score: {score}</p>
    </div>
  );
}
