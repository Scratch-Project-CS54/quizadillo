import React, { useEffect, useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import styles from './game.module.css';

export default function GamePage() {
  const [questions, setQuestions] = useState([]); // store list of all fetched questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // when the page loads
    getQuestions();
  }, []);

  function getQuestions() {
    fetch('http://localhost:5000/api/trivia/questions')
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data); // data is an array of questions!
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }

  //when user clicks on an answer
  const handleAnswer = (selectedAnswer) => {
    //current question at the initial index
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct_answer) {
      //add score by one
      setScore((prev) => prev + 1);
    }
    //set the index increment by one to move on to next question
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  if (loading) return <h2>Loading Questions...</h2>;
  if (currentQuestionIndex >= questions.length)
    return <h2>Game Over! Final Score: {score}</h2>;

  return (
    <div>
      <h1 className={styles.Title}>Trivia Game</h1>
      <QuestionCard
        questionData={questions[currentQuestionIndex]}
        handleAnswer={handleAnswer}
      />
      <p>Score: {score}</p>
    </div>
  );
}

// [{questsion: 'What is....?',
//    options:[{answer:'...',isCorrect:false},{answer:'...',isCorrect:true},{},{}],
//    catogory:'...',
//    difficulty:'...'},{........},{.........}]

// const question={
//     text:data.question,
//     options: [
//         { id: 1, text: data.answer[0], isCorrect: false },
//         { id: 2, text: data.answer[1], isCorrect: false },
//         { id: 3, text: data.answer[2], isCorrect: true },
//         { id: 4, text: data.answer[3], isCorrect: false }
//       ]

// }
