import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Questionnaire from './Questionnaire';
import RotateLoader from "react-spinners/RotateLoader";
import firebase from '../firebase'
import { Link } from 'react-router-dom';


function Display({ name, api }) {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);
    // const n = window.$uName
    const tableName = `/${name}`;
    //const [cate, setCate] = useState({ name });

    //const API_URL = `${api}`;
    // const name = window.$userName


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
    }, [api]);

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
        let curr_index = currentIndex + 1;
        if (curr_index >= questions.length) {
            uploadScore();
        }
        setCurrentIndex(currentIndex + 1);
    }

    const buttonStyle = {
        paddingTop: 20,
        paddingLeft: 3,
        paddingRight: 3,
        paddingBottom: 20,
        borderRadius: 10,
        color: 'black',
        backgroundColor: '#7dced0',
        fontWeight: '500',
        textDecoration: 'none',
        textAlign: 'center',
    }


    //console.log('tableName', tableName)



    const uploadScore = async () => {
        try {
            console.log('logged in upload Data');
            const firestore = firebase.database().ref(tableName);
            let data = {
                userName: window.$uName,
                //category: name,
                userScore: score,
            };
            await firestore.push(data);
            console.log('pushed the data');
        } catch (error) {
            console.log(error.message);
        }
    }

    const alignText = {
        textAlign: 'center',
        Display: 'flex',
        justifyContent: 'center',
        marginTop: '8rem',
    }


    return (questions.length > 0 ? (

        <div className="container" style={alignText}>

            {currentIndex >= questions.length ? (
                <>
                    <h2 className="text-3xl font-bold"
                        style={{
                            color: '#7dced0',
                            textAlign: 'center',
                            marginBottom: '2rem',
                            marginTop: '5rem',


                        }}
                    >
                        Game ended! Your score in {name} is {score}
                    </h2>

                    <div
                        className="flex flex-col gap-4"
                        style={{
                            fontSize: 20,
                        }}>

                        <div className='grid grid-cols-2 gap-3 mt-6'>


                            <Link
                                to='/'
                                style={buttonStyle}>
                                Dashboard
                            </Link>

                            {/* <Link
                            to='/Categories'
                            style={buttonStyle} >
                            Back to Categories
                        </Link> */}

                            <Link
                                to='/ChooseLeaderBoard'
                                style={buttonStyle}>
                                LeaderBoard
                            </Link>

                        </div>
                    </div>
                    {/* {uploadScore()} */}
                </>
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
                        style={alignText}
                        data={questions[currentIndex]}
                        showAnswers={showAnswers}
                        handleAnswer={handleAnswer}
                        handleNextQuestion={handleNextQuestion} />

                </>
            )}
        </div>

    ) : (
        //<h3 className='font-bold'>Loading Please Wait</h3>
        <div className='flex justify-center items-center h-screen'>
            <RotateLoader />
        </div>
    )
    )
}

export default Display;
