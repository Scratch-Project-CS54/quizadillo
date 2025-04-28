<<<<<<< HEAD
import styles from './questioncard.module.css';

=======
>>>>>>> aaabb58 (game page done, pending for test)
const QuestionCard = ({ questionObj, handleAnswer }) => {
  if (!questionObj) return <h2>Loading...</h2>;
  const { question, correct_answer, incorrect_answers } = questionObj;

  const allAnswers = [...incorrect_answers, correct_answer].sort(
    () => Math.random() - 0.5
  );

  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: question }} />
      {allAnswers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswer(answer)}>
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
