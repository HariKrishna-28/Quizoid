import DisplayLeaderBoard from './DisplayLeaderBoard';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
//import { Dropdown, Selection } from 'react-dropdown';



const ChooseLeaderBoard = () => {
    const [category, setCategory] = useState(0);

    const DropDownMenu = () => {
        let options = ['General Knowledge', 'Ecology', 'Computer Science',
            'Maths', 'Geographical Science', 'History',
            'Sports', 'Ancient Mythology', 'Films and Series',
            'Musicals', 'Video Games', 'Books and Novels',
            'Board Games', 'Biological Science', 'Comics', 'Cartoons and Anime'];

        const dropDownStyle = {
            width: '15rem',
            textAlign: 'center',
            // backgroundColor: '#7dced0',
            backgroundColor: 'white',
            color: '#3e4962',
            // justifyContent: 'center',
            borderRadius: 5,
            padding: '0.5rem',
            // border: '1px solid black',

        }

        async function handleChange(event) {
            // setCategory(index);
            // event.preventDefault();
            // This will set the index of the value passed from the options array
            // Modifying the default state, and apply.

            let category_state = category
            category_state = options.indexOf(event.target.value)
            setCategory(category_state)
            // console.log(options.indexOf(event.target.value))

            // Another best option is to use them directly and render them with a switch statement.
        }

        return (
            <select style={dropDownStyle} onChange={handleChange} value={options[category]}>
                {options.map((op, index) => {
                    return (
                        <option value={op} key={index} >{op}</option>
                    )
                })}
            </select>
        )


    }

    return (
        <div>

            {/* <img className="logo" src='../Assets/leaderboard@4x-8,png' alt='name' /> */}
            <Link
                to='/'>
                <img className="logo" alt="logo" src="https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png" />
            </Link>

            <div
                style={{
                    marginTop: '0rem',
                    marginLeft: '2rem',
                    marginRight: '2rem',
                    // backgroundColor: 'white',
                    // color: 'black',
                    borderRadius: 10,
                    padding: '2rem 2rem',

                }}
            >
                <div className='flex justify-center items-center'>
                    <DropDownMenu />

                </div>
                <div style={{
                    marginTop: '2rem',
                    marginBottom: '2rem',
                }}>
                    {(category === 0 ? <DisplayLeaderBoard tableName='General Knowledge' /> :
                        category === 1 ? <DisplayLeaderBoard tableName='Ecology' /> :
                            category === 2 ? <DisplayLeaderBoard tableName='Computer Science' /> :
                                category === 3 ? <DisplayLeaderBoard tableName='Maths' /> :
                                    category === 4 ? <DisplayLeaderBoard tableName='Geographical Science' /> :
                                        category === 5 ? <DisplayLeaderBoard tableName='History' /> :
                                            category === 6 ? <DisplayLeaderBoard tableName='Sports' /> :
                                                category === 7 ? <DisplayLeaderBoard tableName='Ancient Mythology' /> :
                                                    category === 8 ? <DisplayLeaderBoard tableName='Films and Series' /> :
                                                        category === 9 ? <DisplayLeaderBoard tableName='Musicals' /> :
                                                            category === 10 ? <DisplayLeaderBoard tableName='Video Games' /> :
                                                                category === 11 ? <DisplayLeaderBoard tableName='Books and Novels' /> :
                                                                    category === 12 ? <DisplayLeaderBoard tableName='Board Games' /> :
                                                                        category === 13 ? <DisplayLeaderBoard tableName='Biological Science' /> :
                                                                            category === 14 ? <DisplayLeaderBoard tableName='Comics' /> :
                                                                                category === 15 ? <DisplayLeaderBoard tableName='Cartoons and Anime' /> :
                                                                                    null)}
                </div>

                <div className='flex justify-center items-center gap-4'>

                    <Link to='/categories'
                        className="p-2 px-2 rounded-md bg-white text-center text-decoration-none"
                        style={{
                            backgroundColor: 'white', color: '#3e4962', fontWeight: '500',
                        }} >
                        Retake Quiz

                    </Link>

                    <Link
                        to='/'
                        className="p-2 px-2 rounded-md bg-white text-center text-decoration-none"
                        style={{
                            backgroundColor: 'white', color: '#3e4962', fontWeight: '500',
                        }} >
                        Dashboard
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default ChooseLeaderBoard