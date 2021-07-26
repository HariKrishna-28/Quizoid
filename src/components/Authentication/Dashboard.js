import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContexts'
import './Sign_up.css'

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const userName = currentUser.email.slice(0, (currentUser.email.indexOf('@')))
    window.$userName = userName

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')

        } catch {
            setError('Failed to log out')

        }

    }
    const buttonStyle = {
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        color: 'black',
        backgroundColor: '#7dced0',
        fontWeight: '500',
        textDecoration: 'none',
        textAlign: 'center',
    }


    function userInfo() {
        return (
            <>
                <img className="logo" alt="Social Vue" src="https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png" />
                <Card className="topcon">

                    <Card.Body className="containerX">

                        <h1>DashBoard-Profile</h1>

                        {error && <Alert class="alerts" variant="danger"> {error} </Alert>}
                        {/* <p className="foot"><strong>Email: </strong>{currentUser.email}</p> */}
                        <p className="foot"><strong>Hi </strong>{window.userName}</p>

                        <Link to="update-profile" className="btn">
                            Update Profile
                        </Link>

                        <div className="foot">

                            <Link
                                to='/Categories'
                                style={buttonStyle} >
                                Categories
                            </Link>

                            <Button className="btn" variant="link" onClick={handleLogout}>
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