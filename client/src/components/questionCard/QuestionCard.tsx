import styles from './questioncard.module.css';

type questionObj = {
  incorrect_answers: string[];
} & {
  [key: string]: string;
}

type QuestionCardtype = {
  questionObj: questionObj;
  handleAnswer: any;
  handleAnswerSubmit: any;
}

const QuestionCard: React.FC<QuestionCardtype> = ({ questionObj, handleAnswer, handleAnswerSubmit }) => {
  console.log('questionObj', questionObj)
  console.log('handleAnswer', handleAnswer)
  console.log('handleAnswerSubmit', handleAnswerSubmit)
  if (!questionObj) return <h2>Loading...</h2>;
  const { question, correct_answer, incorrect_answers } = questionObj;

  const allAnswers = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);

  return (
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
  );
};

export default QuestionCard;
