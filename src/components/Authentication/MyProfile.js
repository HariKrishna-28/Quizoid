import React, { useContext, useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'
import Logo from '../Assets/logo1.svg'

const MyProfile = () => {
    const [error, setError] = useState("")
    const { logout } = useContext(GlobalContext)
    const history = useHistory()

    // if (window.$uName == null) {
    //     history.push('/login')
    // }
    const { currentUser } = useContext(GlobalContext)
    // const UserName = currentUser.email

    try {
        const UserName = currentUser.email.slice(0, currentUser.email.indexOf('@'))
        window.$uName = UserName;
    }
    catch {
        history.push('/login')
    }

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')

        } catch {
            setError('Failed to log out')

        }

    }
    return (
        <>
            <Link to='/' >
                <img className="logo" alt="logo" src={Logo} />
            </Link>

            <Card className="topcon">
                <h2>{window.$uName}</h2>

                <Card.Body >

                    {/* <h1>Profile</h1> */}

                    {error && <Alert class="alerts" variant="danger"> {error} </Alert>}
                    {/* <p className="foot"><strong>Email: </strong>{currentUser.email}</p> */}
                    <div className='grid grid-rows-2 gap-2'>

                        <Link to="update-profile" className="btn">
                            Update Profile
                        </Link>

                        <Link to="/" className="btn">
                            Back
                        </Link>
                    </div>

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

export default MyProfile
