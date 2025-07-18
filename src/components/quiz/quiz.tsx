import { useState } from "react";
import "./quiz.css";
import Results from "../results/results";
export default function Quiz() {
  const quizBank = [
    {
      question: "React is a JavaScript library for building ___",
      options: ["Database", "Connectivity", "User interface"],
      answer: "User interface",
    },
    {
      question: "What are the two main types of components in React.js?",
      options: [
        "Class based and functional",
        "Functional and stateful",
        "UI and container",
        "Presentational and container",
      ],
      answer: "Class based and functional",
    },
    {
      question: "A React component takes in parameters called ___",
      options: ["Attributes", "Events", "Props", "Children"],
      answer: "Props",
    },
    {
      question: "To write HTML in react we make use of ___?",
      options: ["React.createElement()", "HTTP", "vXML", "JSX"],
      answer: "JSX",
    },
    {
      question: "JSX Stands for ___?",
      options: [
        "JavaScript XScript",
        "JavaScript XML",
        "JavaScript Extreme",
        "JavaScript Extension",
      ],
      answer: "JavaScript XML",
    },
  ];
  const initialAnswer = ["", "", "", "", ""];
  const [userAnswer, setUserAnswer] = useState(initialAnswer);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const selectedAnswer = userAnswer[currentQuestion];
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  function handleSelectOption(option: string) {
    const newAnswer = [...userAnswer];
    newAnswer[currentQuestion] = option;
    setUserAnswer(newAnswer);
  }

  function gotoNext() {
    if (currentQuestion === quizBank.length - 1) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }
  function gotoPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  if (isQuizFinished) {
    return <Results userAnswer={userAnswer} quizBank={quizBank} />;
  }

  return (
    <>
      <div className="card-body">
        <h3 className="card-title">Quiz Reactjs</h3>
        <h5>Question {currentQuestion + 1}</h5>
        <h6>{quizBank[currentQuestion].question}</h6>
        {quizBank[currentQuestion].options.map((option: any, idx: number) => (
          <div
            key={idx}
            className={
              "option" + (selectedAnswer === option ? " selected " : "")
            }
            onClick={() => handleSelectOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="navbar-button">
        <button
          type="button"
          className="btn btn-primary"
          onClick={gotoPrev}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={gotoNext}
          disabled={!selectedAnswer}
        >
          {currentQuestion === quizBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </>
  );
}
