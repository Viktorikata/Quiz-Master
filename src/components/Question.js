import React from "react";

function Question ({question, options, onAnswerClick}) {
    return (
        <div>
            <h2>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <li 
                    key={index}
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