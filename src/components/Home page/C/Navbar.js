import React, { useState } from "react";
import Logo from "../../Assets/logo.svg"
import { Link } from 'react-router-dom'
import "../styles/Navbar.css";
import { MenuIcon } from '@heroicons/react/outline'
// import ReorderIcon from "@material-ui/icons/Reorder";
// import DropDown from './DropDown'
// import Logo from "../assets/logo.png";
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

        <div className="hiddenLinks" >

          <Link to='/categories' className='mx-2' >Take Quiz</Link>
          <Link to='/ChooseLeaderBoard' className='mx-2'>LeaderBoard</Link>
          <Link to="/MyProfile" >Profile</Link>

        </div>

      </div>

      <div className="rightSide" >

        <Link to='/categories'>  Take Quiz</Link>
        <Link to='/ChooseLeaderBoard' > LeaderBoard  </Link>
        <Link to="/MyProfile" >Profile </Link>
        {/* <Button onClick={handleLogout}> Log Out </Button> */}

        <button onClick={toggleNavbar}>
          <MenuIcon className="block h-6 w-6 ml-0" aria-hidden="true" />
        </button>

      </div>
    </div>
    // <div className='flex flex-row py-1 sm:hidden' style={{ backgroundColor: '#1e1e1e', color: 'white' }}>
    //   <img src={Logo} alt='logo' width='200px' />

    //   <div className='mt-2 text-lg pt-3 font-sans' style={{
    //     right: 0
    //   }}>
    //     <Link to='/categories' className='mx-2 no-underline text-white hover:no-underline ' >Take Quiz</Link>
    //     <Link to='/ChooseLeaderBoard' className='mx-2  no-underline text-white hover:no-underline'>LeaderBoard</Link>
    //     <Link to="/MyProfile" className='mx-2 no-underline text-white hover:no-underline'>Profile</Link>

    //   </div>
    // </div>

  );
}

export default Navbar;
