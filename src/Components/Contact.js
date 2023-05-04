import React from "react";
import "./ContactStyles.css";

const Contact = () => {
  return (
    <div name="contact" className="contact">
      <div className="contactdiv">
        <div className="contactdiv2">
          <p>Contact</p>
          <p>
            Thank you for taking the time to visit my portfolio website. I hope
            that you've enjoyed looking through my work and learning more about
            my skills and experience. If you have any questions or would like to
            discuss a potential project, I invite you to get in touch with me
            using the form below. Whether you're an individual or a business, I
            am always excited to collaborate with new clients and bring their
            ideas to life.
          </p>
          <p>
            Please feel free to provide as much detail as possible about your
            project or inquiry, including your timeline and budget. The more
            information you can share, the better I can understand your needs
            and provide you with a personalized solution. I strive to be
            responsive and attentive to all of my clients, and I will do my best
            to get back to you as soon as possible.
          </p>
          <p>
            Thank you again for considering me for your next project. I look
            forward to hearing from you and exploring the possibility of working
            together.
          </p>
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
      <span>
        <hr />
        <p className="footer">&copy; Copyright Sumit 2023.</p>
      </span>
    </div>
  );
};

export default Contact;
