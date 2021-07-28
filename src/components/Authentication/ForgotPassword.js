import React, { useRef, useState, useContext } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from '../contexts/AuthContexts'
import { GlobalContext } from '../contexts/GlobalContext'
import './Sign_up.css'
import { Link } from 'react-router-dom'


export default function ForgotPassword() {

    const emailRef = useRef()
    const { resetPassword } = useContext(GlobalContext)
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check Your Inbox for further Instructions')
        } catch {
            setError('Failed to Reset Password')
        }
        setLoading(false)
    }

    return (
        <>
            <img className="logo" alt="Social Vue" src="https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png" />
            <Card className="topcon">
                <Card.Body >
                    <h1 className='font-bold text-3xl'>Password Reset</h1>
                    {error && <Alert variant="danger"> {error} </Alert>}
                    {message && <Alert variant="sucess"> {message} </Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Control className="form-solo" type="email" ref={emailRef} required placeholder="Email" />
                        </Form.Group>
                        <Button disabled={loading} className="btn" type="submit">
                            Reset Password
                        </Button>
                    </Form>
                    <div className="foot">
                        <Link className="links" to="/login">Log In? </Link>
                    </div>
                    <div className="foot">
                        Need an account? <Link to="/signup" className="links">Sign Up</Link>
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}