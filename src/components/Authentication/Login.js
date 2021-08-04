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
        // border: '1px solid black',
        // borderRadius: 5,
        width: '15rem',
        fontWeight: 'normal',
    }


    return (
        <>
            <img className="logo" alt="Social Vue" src="https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png" />

            <Card className="topcon">
                <Card.Body>
                    {/* class="containerX" */}
                    <h1 className='font-bold text-3xl'>Log In</h1>
                    {/* {error && <Alert variant="danger"> {error}  </Alert>} */}

                    {error && <h4 className="bg-red-100 text-base border border-red-400 text-red-700 px-1 py-2 rounded relative" role='alert'>{error}</h4>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email" >
                            <Form.Control style={formStyle} className="formx-top" type="email" ref={emailRef} required placeholder="Email" />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Control style={formStyle} className="formx-end" classNAme="input" type="password" ref={passwordRef} required placeholder="Password" />
                        </Form.Group>
                        <Button disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white items-center font-bold py-2 px-5 mt-1 rounded" type="submit">Log In</Button>
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