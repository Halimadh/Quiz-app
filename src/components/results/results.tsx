interface MyProps {
  userAnswer: string[];
  quizBank: any[];
}

function Results({ userAnswer, quizBank }: MyProps) {
  function getScore() {
    let finalScore = 0;
    userAnswer.forEach((answer, index) => {
      if (answer === quizBank[index].answer) {
        finalScore++;
      }
    });
    return finalScore;
  }
  const score = getScore();
  return (
    <>
      <div className="card-body">
        <h3>Quiz Results</h3>
        <h4>
          Your score : {score}/{quizBank.length}
        </h4>
        <button> restart Quiz </button>
      </div>
    </>
  );
}
export default Results;
