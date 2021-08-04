import React from "react";
import Banner from "../assets/undraw_contact_us_15o2.png";
// import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${Banner})` }}>
      </div>
      <div className="leftSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
