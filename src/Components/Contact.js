import React from "react";
import "./ContactStyles.css";

const Contact = () => {
  return (
    <div name="contact" className="contact">
      <div className="contactdiv">
        <div className="contactdiv2">
          <p>Contact</p>
          <p>Submit the form below to get in touch with me</p>
        </div>

        <div className="formdiv">
          <form
            action="https://getform.io/f/3997f4fe-7249-4b30-ae6d-36f648d749a2"
            method="POST"
            className=" form"
          >
            <input type="text" name="name" placeholder="Enter your name" />
            <input
              type="text"
              name="companyName"
              placeholder="Enter your Company Name"
            />
            <input type="text" name="email" placeholder="Enter your email" />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
            ></textarea>

            <button className="btn">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
