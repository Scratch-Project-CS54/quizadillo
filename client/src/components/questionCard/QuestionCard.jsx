const QuestionCard = ({ questionData, handleAnswer }) => {
  const { question, correct_answer, incorrect_answers } = questionData;

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
