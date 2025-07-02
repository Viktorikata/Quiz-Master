import React from "react";

function Question ({question, options, onAnswerClick}) {
    return (
        <div className="question-container">
            <h2 className="question-text">{question}</h2>
            <ul className="option-list">
                {options.map((option, index) => (
                    <li 
                    key={index}
                    className='option-item'
                    onClick={()=> onAnswerClick(index)}
                    style={{cursor:"pointer", padding: "8px 0"}}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Question;