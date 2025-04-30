// import React, { useEffect, useState } from 'react';
// import QuestionCard from '../questioncard/questioncard';
// import styles from './game.module.css';

// export default function Game() {
//   const [questions, setQuestions] = useState([]); // store list of all fetched questions
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     // when the page loads
//     getQuestions();
//   }, []);

//   function getQuestions() {
//     //const randomQ = Math.floor(Math.random() * 50);
//     fetch('http://localhost:5000/questions')
//       .then((res) => res.json())
//       .then((data) => {
//         setQuestions(data); // data is an array of questions!
//         console.log(data);
//       })
//       .catch((err) => console.error(err));
//   }

//   function handleAnswer(answer) {
//     if (answer === questions[currentQuestionIndex].correct_answer) setScore((prev) => prev + 1);

//     setCurrentQuestionIndex((prev) => prev + 1);
//   }

//   return (
//     <div>
//       <QuestionCard questionObj={questions[currentQuestionIndex]} handleAnswer={handleAnswer} />

//       <p>Score: {score}</p>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import QuestionCard from '../questionCard/QuestionCard';
import styles from './game.module.css';

// category
// : 
// "Entertainment: Cartoon &amp; Animations"
// correct_answer
// : 
// "Miranda Wright"
// difficulty
// : 
// "easy"
// incorrect_answers
// : 
// (3) ['Dick Tracy', 'Eddie Valiant', 'Dr. Ludwig von Drake']
// question
// : 
// "In the 1993 Disney animated series &quot;Bonkers&quot;, what is the name of Bonker&#039;s second partner?"
// type
// : 
// "multiple"


export default function Game() {
  const [questions, setQuestions] = useState<any[]>([]); // store list of all fetched questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    try {
      const amount = 10; // or any number
      const difficulty = 'easy';
      const type = 'multiple';
      const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch trivia questions');
      }

      const data = await response.json();
      console.log(data)
      
      setLoading(false);
      
      setQuestions(data.results);

    } catch (err) {

      console.error(err);
    }
  }

  function handleAnswer(answer:string) {
    console.log(answer)
    console.log(questions)
    if (answer === questions[currentQuestionIndex]?.correct_answer) {
      setScore((prev) => prev + 1);
    }
    setCurrentQuestionIndex((prev) => prev + 1);
  }

  async function handleAnswerSubmit(answer:string) {
    const url = 'http://localhost:4000/questions';
    const body = {
      question: questions[currentQuestionIndex]?.question,
      userAnswer: answer,
      correctAnswer: questions[currentQuestionIndex]?.correct_answer,
    };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error('Submit answer failed!');
      }

      const data = await res.json();
      console.log('Submit answer success!', data);
    } catch (err) {
      console.error('Error in submitting answer', err);
    }
  }

  if (loading) return <p>Loading questions...</p>;

  if (currentQuestionIndex >= questions.length) return <p>Game over! Your score: {score}</p>;

  return (
    <div>
      <QuestionCard
        questionObj={questions[currentQuestionIndex]}
        handleAnswer={handleAnswer}
        handleAnswerSubmit={handleAnswerSubmit}
      />
      <p className={styles.score}>Score: {score}</p>
    </div>
  );
}
