import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Questionnaire from './Questionnaire';
import RotateLoader from "react-spinners/RotateLoader";
//import './App.css';
//import { Questionnaire } from './components';
//import Questionnaire from './Questionnaire';


function Display({ api }) {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);
    //const API_URL = `${api}`;

    useEffect(() => {
        fetch(`${api}`)
            .then(res => res.json())
            .then(data => {
                const questions = data.results.map((question) =>
                ({
                    ...question,
                    answers: [
                        question.correct_answer,
                        ...question.incorrect_answers
                    ].sort(() => Math.random() - 0.5
                    ),
                }));

                setQuestions(questions);

            });
    }, []);

    const handleAnswer = (answer) => {
        //check for the answer, show the question and change the score
        // loops through the question set
        if (!showAnswers) {
            if (answer === questions[currentIndex].correct_answer) {
                setScore(score + 1)
                //increase score
            }
        }

        setShowAnswers(true);

        //const newIndex = currentIndex + 1
        //setCurrentIndex(newIndex)


    };

    const handleNextQuestion = () => {
        setShowAnswers(false);

        setCurrentIndex(currentIndex + 1);
    }

    return (questions.length > 0 ? (
        <div className="container">

            {currentIndex >= questions.length ? (
                <h1 className="text-3xl font-bold"
                    style={{
                        color: '#7dced0',
                        textAlign: 'center'
                    }}
                >
                    Game ended! Your score is {score}
                </h1>

            ) : (
                <>
                    {/*} <header
                        className="font-bold text-3xl "
                        style={{
                            paddingBottom: 60,
                            marginBottom: 10,
                            textAlign: 'center',

                        }}>
                        {title}
                    </header> */}
                    <Questionnaire
                        data={questions[currentIndex]}
                        showAnswers={showAnswers}
                        handleAnswer={handleAnswer}
                        handleNextQuestion={handleNextQuestion} />
                </>
            )}
        </div>
    ) : (
        //<h3 className='font-bold'>Loading Please Wait</h3>
        <RotateLoader />
    ))
}

export default Display;
