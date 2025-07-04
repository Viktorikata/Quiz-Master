import React, {useState} from "react";
import Question from "./components/Question";
import questions from "./questions";
import Result from "./components/Result";
import "./App.css"

function App () {

  // Номер текущего вопроса
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Текущий счет
  const [score, setScore] = useState(0);
  // Результат викторины
  const [showResult, setShowResult] = useState(false);
  
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (selectedIndex) => {
    const isCorrect = selectedIndex === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResult(false);
  }

  return (
    <div className="App">
      <h1>🧠 Quiz Master</h1>
      <p>( Викторина на тему: "HTML, CSS, JS" )</p>
      {showResult ? (
        <Result score={score} onRestart={handleRestart} />
      ) : (
        <Question 
          question={currentQuestion.question}
          options={currentQuestion.options}
          onAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;