import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../C/MenuItem";
import Navbar from "../C/Navbar";
import { Link } from 'react-router-dom'
import Footer from "../C/Footer";
// import ContactForm from "./ContactForm";
import "../styles/Home.css";
import "../styles/Menu.css";
import "../styles/Contact.css";

function Home() {
  // const [submitted, setSubmitted] = useState(false);

  return (
    <>

      <div style={{
        backgroundColor: '#1e1e1e',
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
      }}>

        {/* <Navbar className="sm:none relative mt-0" /> */}
        {/* <NavigationBar /> */}
        <Navbar />
        {/* <N /> */}

        <div className="home" style={{ objectFit: 'fill', marginTop: 0, marginBottom: 0, }}>

        </div>
        <div style={{ "backgroundColor": "#ffffff", "backgroundImage": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23fafafa' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E\")", textAlign: 'center', color: '#1e1e1e', fontSize: '25px' }}>
          {/* <h1 className='pt-2'>Hi, {window.$uName}</h1> */}
          <h5><br></br></h5>
          <h1 className='my-6'> Hi {window.$uName}, </h1>
          <div className='py-4 mx-3 lg:mx-10'>
            <h5>Welcome to Quizoid, an online gamified quiz application to test your knowledge. <br></br> The rules are simple. Take the  <Link to='/categories' className="text-decoration-none">Quiz</Link>, choose a category,  compete wtih other users and make it to the <Link to='/ChooseLeaderBoard' className="text-decoration-none">leaderboard</Link>.<br></br> All the Best!!</h5>
          </div>

          <h1 className='pt-2 pb-3'>INSTRUCTIONS</h1>
          <div className='pb-5 mb-2 mx-3'>
            <h5> Choose a category from the <Link to='/categories' className="text-decoration-none" >take quiz</Link> page.<br></br></h5>
            <h5> There will be 4 choices for each question.<br></br></h5>
            <h5>Select the correct option.<br></br></h5>
            <h5>The right answer will be displayed in <span style={{ color: 'green' }}>Green</span> colour.<br></br></h5>
            <h5>The wrong answers will be displayed in <span style={{ color: 'red' }}>Red</span> colour.</h5>
            <h5>Click Next to move to the next question.<br></br></h5>
            <h5>After 10 questions are completed move to <Link to='/ChooseLeaderBoard' className="text-decoration-none">leaderboard</Link> to see your scores!<br></br></h5>
            <h5>If you abandon the quiz, your score will be considered as zero.<br></br></h5>
          </div>


          <Link to='/Categories' style={{ backgroundColor: '#1e1e1e' }} className='text-decoration-none text-white text-2xl font-bold p-2 px-3 rounded'>Take Quiz</Link>

          <div className="menu" style={{ backgroundColor: "#ffffff", paddingBottom: '5rem', "backgroundImage": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23fafafa' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E\")" }}>

            <h1 className='pt-20 '>OUR TEAM</h1>

            <div className="menuList">
              {MenuList.map((menuItem, key) => {
                return (
                  <a className="text-decoration-none text-black" href={menuItem.link} target="_blank" rel="noreferrer">
                    <MenuItem
                      key={key}
                      image={menuItem.image}
                      name={menuItem.name}
                      price={menuItem.price}
                    />
                  </a>
                );
              })}
            </div>

          </div>

          {/* <ContactForm /> */}

        </div>

        <Footer />

      </div>
    </>

  );
}
export default Home;
