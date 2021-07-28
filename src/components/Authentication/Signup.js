import React, { useContext, useRef, useState } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from '../contexts/AuthContexts'
import './Sign_up.css'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()
    const { signup } = useContext(GlobalContext)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !==
            confirmpasswordRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to Create an Account')
        }
        setLoading(false)
    }

    const formStyle = {
        padding: '0.5rem 0.5rem',
        marginTop: '0.5rem',
        width: '15rem',
        marginBottom: '0.5rem',
        border: '1px solid black',
        borderRadius: 10,
    }

    return (
        <>
            <img className="logo" alt="Social Vue" src="https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png" />
            <Card className="topcon">
                <Card.Body >
                    <h1 className='font-bold text-3xl'>Sign Up</h1>
                    {error && <Alert variant="danger"> {error} </Alert>}
                    <Form id="signup-form" onSubmit={handleSubmit}>
                        <Form.Group id="signup-email">
                            <Form.Control className="form-top" style={formStyle} type="email" ref={emailRef} required placeholder="Email" />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Control className="form-mid" type="password" style={formStyle} ref={passwordRef} placeholder="Password"
                                pattern="(?=.*\d)(?=.[a-z])(?=.[A-z]).{8,}"
                                title="Must contain at least one number[0-9] and one uppercase[A-Z] and lowercase[a-b] letter,and atleast 8 or more character"
                                required
                            />
                        </Form.Group>
                        <Form.Group id="confirmpassword">
                            <Form.Control className="form-end" type="password" style={formStyle} ref={confirmpasswordRef} required placeholder="Confirm Password" />
                        </Form.Group>
                        <Button disabled={loading} className="btn" type="submit">Sign Up</Button>
                    </Form>
                    <div className="foot">
                        Already have an account? <Link to="/login" className="links">Log In</Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}