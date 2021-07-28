import React, { useContext, useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'
import './Sign_up.css'

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useContext(GlobalContext)
    const history = useHistory()
    const UserName = currentUser.email.slice(0, currentUser.email.indexOf('@'))
    // const firstDigit = currentUser.email.match(/\d/) // will give you the first digit in the string
    // const indexed = currentUser.email.indexOf(firstDigit)
    // const UserName = currentUser.email.slice(0, indexed)
    // if (UserName.length === 0) {
    //     const UserName = currentUser.email.slice(0, currentUser.email.indexOf('@'))
    // }
    window.$uName = UserName;

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')

        } catch {
            setError('Failed to log out')

        }

    }
    // const buttonStyle = {
    //     // paddingTop: 20,
    //     // paddingBottom: 20,
    //     // borderRadius: 10,
    //     // color: 'black',
    //     // backgroundColor: '#7dced0',
    //     // fontWeight: '500',
    //     // textDecoration: 'none',
    //     // textAlign: 'center',
    // }


    function userInfo() {
        return (
            <>
                <img className="logo" alt="Social Vue" src="https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png" />

                <Card className="topcon">
                    <h2>Hi, {window.$uName}</h2>

                    <Card.Body >

                        <h1>DashBoard-Profile</h1>

                        {error && <Alert class="alerts" variant="danger"> {error} </Alert>}
                        {/* <p className="foot"><strong>Email: </strong>{currentUser.email}</p> */}

                        <Link to="update-profile" className="btn">
                            Update Profile
                        </Link>

                        <Link
                            to='/Categories'
                            className='btn' >
                            Categories
                        </Link>

                        <Link
                            to='/ChooseLeaderBoard'
                            className='btn' >
                            Leaderboards
                        </Link>


                        <div className="foot">
                            <Button className="btn" style={{ textDecoration: 'none', }} variant="link" onClick={handleLogout}>
                                Log Out
                            </Button>



                        </div>
                    </Card.Body>
                </Card>

            </>
        )

    }

    return (
        userInfo()
    )

}