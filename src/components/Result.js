import React from "react";

function Result ({score, onRestart}) {
    return (
        <div>
            <h2>Вы набрали {score} быллов!</h2>
            <button onClick={onRestart}>Пройти заново</button>
        </div>
    );
}

export default Result;