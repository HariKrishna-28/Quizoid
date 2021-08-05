import React, { useContext } from 'react'
// import { Card, Button, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'
import './Sign_up.css'
import Home from '../Home Page/pages/Home'

export default function Dashboard() {
    // const [error, setError] = useState("")
    const { currentUser } = useContext(GlobalContext)
    const history = useHistory()

    try {
        const UserName = currentUser.email.slice(0, currentUser.email.indexOf('@'))
        window.$uName = UserName;
    }

    catch {
        history.push('/login')
    }

    // const firstDigit = currentUser.email.match(/\d/) // will give you the first digit in the string
    // const indexed = currentUser.email.indexOf(firstDigit)
    // const UserName = currentUser.email.slice(0, indexed)
    // if (UserName.length === 0) {
    //     const UserName = currentUser.email.slice(0, currentUser.email.indexOf('@'))
    // }

    // async function handleLogout() {
    //     setError('')

    //     try {
    //         await logout()
    //         history.push('/login')

    //     } catch {
    //         setError('Failed to log out')

    //     }

    // }
    // const buttonStyle = {
    //     // paddingTop: 20,
    //     // paddingBottom: 20,
    //     // borderRadius: 10,
    //     // color: 'black',
    //     // backgroundColor: '#7dced0',
    //     // fontWeight: '500',
    //     // textDecoration: 'none',
    //     // textAlign: 'center',
    // }

    function userInfo() {
        return (<Home />)

    }

    return (
        userInfo()
    )

}