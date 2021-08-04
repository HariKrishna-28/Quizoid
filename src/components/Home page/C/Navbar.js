import React, { useState } from "react";
import Logo from "../assets/logo.png";
// import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import { Link } from 'react-router-dom'
// import { GlobalContext } from '../../contexts/GlobalContext'
// import { Button } from 'react-bootstrap'

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  // const { currentUser, logout } = useContext(GlobalContext)
  // const history = useHistory()
  // const [error, setError] = useState("")


  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  // async function handleLogout() {
  //   setError('')

  //   try {
  //     await logout()
  //     history.push('/login')

  //   } catch {
  //     setError('Failed to log out')

  //   }
  // }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt='logo' />

        <div className="hiddenLinks">
          {/* <a href="http://quizoid-home.netlify.app">Home</a> */}
          <Link to='/categories' >Take Quiz</Link>
          <Link to='/ChooseLeaderBoard'>LeaderBoard</Link>
          <Link to="/MyProfile" >Profile</Link>
          {/* <Button onClick={handleLogout}> Log Out </Button> */}

        </div>
      </div>
      <div className="rightSide">
        <Link to='/categories' >  Categories</Link>
        <Link to='/ChooseLeaderBoard'> LeaderBoard  </Link>
        <Link to="/MyProfile" >Profile </Link>
        {/* <Button onClick={handleLogout}> Log Out </Button> */}
        <button onClick={toggleNavbar}>
          X
        </button>
      </div>
    </div>
  );
}

export default Navbar;
