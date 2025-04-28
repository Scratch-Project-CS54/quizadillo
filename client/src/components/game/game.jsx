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
import QuestionCard from '../questioncard/questioncard';
// import styles from './game.module.css';

export default function Game() {
  const [questions, setQuestions] = useState([]); // store list of all fetched questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

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

      // const dummyQuestions = [
      //   {
      //     question: "What is the capital of France?",
      //     correct_answer: "Paris",
      //     incorrect_answers: ["London", "Berlin", "Rome"]
      //   },
      //   {
      //     question: "Who painted the Mona Lisa?",
      //     correct_answer: "Leonardo da Vinci",
      //     incorrect_answers: ["Vincent Van Gogh", "Pablo Picasso", "Claude Monet"]
      //   }
      // ];

      // setQuestions(dummyQuestions);

      setLoading(false);
      setQuestions(data.results);
    } catch (err) {
      console.error(err);
    }
  }

  function handleAnswer(answer) {
    if (answer === questions[currentQuestionIndex]?.correct_answer) {
      setScore((prev) => prev + 1);
    }
    setCurrentQuestionIndex((prev) => prev + 1);
  }

  if (loading) return <p>Loading questions...</p>;

  if (currentQuestionIndex >= questions.length) return <p>Game over! Your score: {score}</p>;

  return (
    <div>
      <QuestionCard questionObj={questions[currentQuestionIndex]} handleAnswer={handleAnswer} />
      <p>Score: {score}</p>
    </div>
  );
}
