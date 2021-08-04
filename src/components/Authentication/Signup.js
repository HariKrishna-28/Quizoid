import React, { useContext, useRef, useState } from 'react'
import { Form, Button, Card } from "react-bootstrap"
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
    // const { verifyEmail } = useContext(GlobalContext)

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
            // await verifyEmail(emailRef.current.value)
            console.log('verified')
            history.push("/")

        } catch {
            setError('Failed to Create an Account')
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
    }


    return (
        <>
            <img className="logo" alt="Social Vue" src="https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png" />
            <Card className="topcon">
                {/* {console.log(auth)} */}

                <Card.Body >
                    <h1 className='font-bold text-3xl'>Sign Up</h1>

                    {/* {error && <Alert variant="danger"> {error} </Alert>} */}
                    {error && <h4 className="bg-red-100 text-base border border-red-400 text-red-700 px-1 py-2 rounded relative" role='alert'>{error}</h4>}

                    <Form id="signup-form" onSubmit={handleSubmit}>

                        <Form.Group id="signup-email">
                            <Form.Control className="formx-top" style={formStyle} type="email" ref={emailRef} required placeholder="Email" />
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Control className="formx-mid" type="password" style={formStyle} ref={passwordRef} placeholder="Password"
                                pattern="(?=.*\d)(?=.[a-z])(?=.[A-z]).{8,}"
                                title="Must contain at least one number[0-9] and one uppercase[A-Z] and lowercase[a-b] letter,and atleast 8 or more character"
                                required
                            />

                        </Form.Group>

                        <Form.Group id="confirmpassword">
                            <Form.Control className="formx-end" type="password" style={formStyle} ref={confirmpasswordRef} required placeholder="Confirm Password" />
                        </Form.Group>

                        <Button disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded" type="submit">Sign Up</Button>

                    </Form>

                    <div className="foot">
                        Already have an account? <Link to="/login" className="links">Log In</Link>
                    </div>

                </Card.Body>
            </Card>
        </>
    )
}