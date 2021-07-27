import React, { useContext, useRef, useState } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from '../contexts/AuthContexts'
import './Sign_up.css'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useContext(GlobalContext)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)
    }

    return (
        <>
            <img className="logo" alt="Social Vue" src="https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png" />

            <Card className="topcon">
                <Card.Body class="containerX">

                    <h1>Log In</h1>
                    {error && <Alert variant="danger"> {error} </Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Control className="form-top" type="email" ref={emailRef} required placeholder="Email" />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Control className="form-end" size="lg" classNAme="input" type="password" ref={passwordRef} required placeholder="Password" />
                        </Form.Group>
                        <Button disabled={loading} className="btn" type="submit">Log In</Button>
                    </Form>

                    <div className="foot">
                        <Link className="links" to="/forgot-password">Forgot Password? </Link>
                    </div>

                    <div className="foot">
                        Need an account? <Link to="/signup" className="links">Sign Up</Link>
                    </div>

                </Card.Body>
            </Card>
        </>
    )
}
