import styles from './questioncard.module.css';

const QuestionCard = ({ questionObj, handleAnswer, handleAnswerSubmit }) => {
  if (!questionObj) return <h2>Loading...</h2>;

  const { question, correct_answer, incorrect_answers } = questionObj;
  const allAnswers = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div className={styles.page}>
      <div className={styles.questionBox}>
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: question }} />
        {allAnswers.map((answer, index) => (
          <button
            className={styles.btns}
            key={index}
            onClick={() => {
              handleAnswer(answer);
              handleAnswerSubmit(answer);
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
