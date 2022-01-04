import React from 'react'
import { Card } from "react-bootstrap"
// import { useAuth } from '../contexts/AuthContexts'
import './Authentication/Sign_up.css'
import { Link } from 'react-router-dom'
import Four04 from './Assets/404.png'
// import { GlobalContext } from '../contexts/GlobalContext'
import Logo from './Assets/logo1.svg'
// import ShowPasswordIcon from '../Assets/shared-vision.png'
// import HidePasswordIcon from '../Assets/invisible-symbol.png'


const PageNotFound = () => {
    return (
        <>
            <Link to='/' >
                <img className="logo" alt="logo" src={Logo} />
            </Link>

            <Card className="topcon">
                {/* <h2>{window.$uName}</h2> */}

                <Card.Body >

                    {/* <h1 className='font-bold text-5xl'>404_</h1> */}

                    {/* <p className="foot"><strong>Email: </strong>{currentUser.email}</p> */}
                    <div className='grid grid-rows-2'>
                        <h1 className='font-bold text-3xl'>404_</h1>
                        <p className="font-semibold">OOPS! YOU'RE BEYOND THE BORDERS.</p>
                        <img src={Four04} alt="img" className="rounded-lg" />

                    </div>

                    <div className="foot mt-1">
                        <Link to="/"
                            className="bg-blue-700  hover:bg-blue-500 text-white rounded text-decoration-none p-2 px-3">
                            Back to home page
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default PageNotFound
