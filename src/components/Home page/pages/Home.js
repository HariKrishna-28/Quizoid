import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../C/MenuItem";
import Navbar from "../C/Navbar";
// import NavigationBar from "../C/NavigationBar";
import { Link } from 'react-router-dom'
import Footer from "../C/Footer";
import "../styles/Home.css";
import "../styles/Menu.css";
import "../styles/Contact.css";
// import N from '../C/N'

// import Navbar from '../C/Navbar'
// import { useState } from "react";
// import BannerImage from "../assets/bg.svg";
// import BannerImage from '../assets/5603875.jpg'
// backgroundImage: `url(${BannerImage})`,
// import Nav from "../C/Nav";

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
          <h5><br></br></h5>

          <h1 className='pt-2 pb-3'>INSTRUCTIONS</h1>
          <div className='pb-2 mx-3'>

            <h5> Select the Categories from the <Link to='/categories' style={{ textDecoration: 'none' }}>categories</Link> page.<br></br></h5>
            <h5> There will be 4 choices for each quiz question.<br></br></h5>
            <h5>Select the correct option.<br></br></h5>
            <h5>The right answer will be displayed in <span style={{ color: 'green' }}>Green</span> colour.<br></br></h5>
            <h5>The wrong answers will be displayed in <span style={{ color: 'red' }}>Red</span> colour.</h5>
            <h5>Click Next to move to the next question.<br></br></h5>
            <h5>After 10 questions are completed move to leaderboard to see your scores!<br></br></h5>
            <h5>If you abandon the quiz, your score will be considered as zero.<br></br></h5>
          </div>

          <div className="menu" style={{ backgroundColor: "#ffffff", paddingBottom: '5rem', "backgroundImage": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23fafafa' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E\")" }}>

            <h1 className='pt-20 '>OUR TEAM</h1>

            <div className="menuList">
              {MenuList.map((menuItem, key) => {
                return (
                  <MenuItem
                    key={key}
                    image={menuItem.image}
                    name={menuItem.name}
                    price={menuItem.price}
                  />
                );
              })}
            </div>

            {/* <h1 className='py-16'>Contact us</h1>

          <div className="align-center items-center">
            <form className="w-full max-w-lg align-center items-center  ">
              <div className="flex flex-wrap  mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                  <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    E-mail
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                  <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Message
                  </label>
                  <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" ></textarea>
                  <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
                </div>
              </div>
              <div className="md:flex md:items-center lg:ml-48">
                <div>
                  <button className="shadow bg-black lg:ml-4  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Send
                  </button>
                </div>
                <div className="md:w-2/3"> <p></p></div>
              </div>
            </form>
          </div> */}

            {/* <h5><br></br></h5> */}
            {/* <h5></h5> */}
            {/* <h5><br></br></h5> */}

          </div>
          {/* <div className="container mx-auto pb-20 w-3/6 ">
          <div className="p-5 space-y-5 shadow-xl ">
            <h1 className="text-center pb-5">Have something to say? Contact Us</h1>

            <form>
              <div className="grid grid-cols-2 lg:gap-5 gap-1">
                <input
                  type="text"
                  className="border border-gray-500 col-span-2 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                  placeholder="First Name"
                />

                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                  placeholder="Last Name"
                />

                <input
                  type="email"
                  className="border border-gray-500 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500 col-span-2"
                  placeholder="Email"
                />

                <textarea
                  cols="10"
                  rows="5"
                  className="border border-gray-500 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500 col-span-2"
                  placeholder="Write your message..."
                ></textarea>

              </div>

              <input
                type="submit"
                value="Send Message"
                className="focus:outline-none mt-5 bg-black px-4 rounded-md py-2 text-white font-bold"
              />

            </form>
          </div>
        </div> */}

        </div>

        <Footer />

      </div>
    </>

  );
}
export default Home;
