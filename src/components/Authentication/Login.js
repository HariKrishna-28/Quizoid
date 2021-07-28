import React, { useContext, useRef, useState } from 'react'
import { Form, Button, Card } from "react-bootstrap"
// import { useAuth } from '../contexts/AuthContexts'
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

    const formStyle = {
        padding: '0.5rem 0.5rem',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        border: '1px solid black',
        borderRadius: 10,
        width: '18rem',
    }

    return (
        <>
            <img className="logo" alt="Social Vue" src="https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png" />

            <Card className="topcon">
                <Card.Body>
                    {/* class="containerX" */}
                    <h1 className='font-bold'>Log In</h1>
                    {/* {error && <Alert variant="danger"> {error}  </Alert>} */}

                    {error && <h4 className='text-red-500 bg-red-300 p-1 rounded-mt border-red-800 rounded'>{error}</h4>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email" >
                            <Form.Control style={formStyle} className="form-top" type="email" ref={emailRef} required placeholder="Email" />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Control style={formStyle} className="form-end" classNAme="input" type="password" ref={passwordRef} required placeholder="Password" />
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