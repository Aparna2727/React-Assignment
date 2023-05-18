import React, { useState, useEffect } from "react";
import "./Quizz.css";
import { quetions } from "../Quiz_Quetion/Quetions";
import { QuizzResult } from "./QuizzResult";

export function Quizz() {
  const [currentQuetion, setCurrentQuetion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  function handleAnswerOption(isCorrect) {
    if (isCorrect) {
      setScore(score + 2);
      setCorrectAnswer(correctAnswer + 1);
    }
    // setClicked(true);
  }

  const handleOptionSelect = ans => {
    setSelectedOption(ans);
  };

  function handleNextQuetions() {
    const nextQuestion = currentQuetion + 1;
    if (nextQuestion < quetions.length) {
      setCurrentQuetion(nextQuestion);
    } else {
        setSelectedOption('');
        if (currentQuetion === quetions.length - 1) {
          setShowResult(true);
        } 
    }
  }

  function handleRestartAgain() {
    setScore(0);
    setCorrectAnswer(0);
    setCurrentQuetion(0);
    setShowResult(false);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuetions();
    }
  }, [timeLeft]);

  return (
    <>
      <div className="quiz-container">
        {showResult ? (
          <QuizzResult
            score={score}
            correctAnser={correctAnswer}
            handleRestartAgain={handleRestartAgain}
          />
        ) : (
          <>
            {/* quetions show here */}
            <div className="Quetion-Section">
              <p className="Timer">
                Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
              </p>
              <div className="quetion-count">Quetion({currentQuetion + 1})</div>
              <div className="quetions-text">
                {quetions[currentQuetion].QuetionText}
              </div>
            </div>

            {/* Answers show here */}
            <div className="Answer-Section">
              {quetions[currentQuetion].answerOptions.map((ans, index) => {
                return (
                  <p
                    onClick={() => handleAnswerOption(ans.isCorrect)}
                    key={index}
                  >
                    <input type="radio" name="ans" id={`ans${index}`} key={index} value={ans} checked={selectedOption === ans}  onChange={() => handleOptionSelect(ans)} />
                    {ans.answerText}
                  </p>
                );
              })}

              <div>
                <button className="next-submit-btn" onClick={handleNextQuetions}>
                  {currentQuetion === quetions.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
