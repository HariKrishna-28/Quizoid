import React from 'react';



const Questionnaire = ({
    showAnswers,
    handleAnswer,
    handleNextQuestion,
    data: { question, correct_answer, answers }
}) => {


    return (
        <div className='flex flex-col'>
            {/* prints the questions*/}
            <div className="bg-purple-700 text-white p-10 rounded shadow-md">
                <h2
                    className="text-2xl"
                    dangerouslySetInnerHTML={{ __html: question }}
                />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
                {answers.map((answer, idx) => {
                    const textColor = showAnswers ?
                        answer === correct_answer ?
                            'text-green-500' : 'text-red-500' : 'text-white'

                    //const textColor = showAnswers ? 'text-white' : 'text-black';

                    return (
                        <button
                            key={idx}
                            className={`kl-auto bg-purple-700 ${textColor} p-4 font-semibold rounded shadow`}
                            onClick={() => handleAnswer(answer)} answer={answer}
                            dangerouslySetInnerHTML={{ __html: answer }} />
                    )
                })}
            </div>
            {showAnswers && (
                <button
                    onClick={handleNextQuestion}
                    className={`ml-auto mt-6  bg-white text-purple-800 p-4 font-semibold rounded shadow`}>
                    Next Question
                </button>
            )}
        </div>
    );


}

export default Questionnaire;
