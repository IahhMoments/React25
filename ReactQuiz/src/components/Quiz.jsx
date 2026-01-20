import { useState } from "react";
import QUESTIONS from "../../questions.js";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  }

  const activeQuestionIndex = userAnswer.length;
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
