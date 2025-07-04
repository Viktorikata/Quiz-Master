import React from "react";

function Result ({score, onRestart}) {

    function getWordForm(score) {
        if (score === 1) return "балл";
        if (score >= 2 && score <= 4) return 'балла';
        return 'баллов';
    }

    return (
        <div className="result-container">
            <h2 className="result-text">
                Вы набрали {score} {getWordForm(score)}!
            </h2>
            <button className="restart-button" onClick={onRestart}>Пройти заново</button>
        </div>
    );
}

export default Result;