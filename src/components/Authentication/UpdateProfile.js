import React, { useRef, useState, useContext } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from '../contexts/AuthContexts'
import { GlobalContext } from '../contexts/GlobalContext'
import './Sign_up.css'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../Assets/logo1.svg'


export default function UpdateProfile() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useContext(GlobalContext)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !==
            confirmpasswordRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failed to Update Account')
        }).finally(() => {
            setLoading("false")
        })
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

            <img className="logo" src={Logo} alt="Social Vue" />
            <Card className="topcon">
                <Card.Body >
                    {/* className="containerX" */}
                    <h1 className='font-bold text-3xl'>Update Profile</h1>
                    {error && <Alert variant="danger"> {error} </Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Control className="formx-top" style={formStyle} type="email" ref={emailRef} required placeholder="Email" defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Control className="formx-mid" style={formStyle} type="password" ref={passwordRef} placeholder="Enter new Password" />
                        </Form.Group>
                        <Form.Group id="confirmpassword">
                            <Form.Control className="formx-end" style={formStyle} type="password" ref={confirmpasswordRef} placeholder="Confirm Password" />
                        </Form.Group>
                        <Button disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Update</Button>
                    </Form>
                    <div className="foot">
                        <Link to="/MyProfile" className="links">Cancel</Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
