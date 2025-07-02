import React from "react";

function Result ({score, onRestart}) {
    return (
        <div className="result-container">
            <h2 className="result-text">Вы набрали {score} баллов!</h2>
            <button className="restart-button" onClick={onRestart}>Пройти заново</button>
        </div>
    );
}

export default Result;