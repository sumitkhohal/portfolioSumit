import React from "react";
import HeroImage from "../assets/profile-pic1.png";
// import HeroImage1 from "../assets/logonew1.png";
// import HeroImage2 from "../assets/logonew2.png";
// import HeroImage3 from "../assets/logonew3.png";
// import HeroImage4 from "../assets/logonew4.png";
// import HeroImage5 from "../assets/logonew5.png";

// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "./HomeStyles.css";

const Home = () => {
  return (
    <div name="home" className="home">
      <div className=" homediv">
        <div className="homediv2">
          {/* <center>
            <img className="demo-bg" src={HeroImage} alt="" />
          </center> */}
          <h2>
            Hello, I am Sumit,
            <br />
            <span className="application"> An Application Developer</span>.
          </h2>
          <p>
            I have more than 2 years of experience building and desgining
            software. Currently, I love to work on web application using
            technologies like React, Redux, JavaScript and GraphQL.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className="button">
              <span>
                Portfolio
                {/* <MdOutlineKeyboardArrowRight size={25} /> */}
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="my profile" className="heroimg" />
          {/* <img src={HeroImage1} alt="my profile" className="heroimg" />
          <img src={HeroImage2} alt="my profile" className="heroimg" />
          <img src={HeroImage3} alt="my profile" className="heroimg" />
          <img src={HeroImage4} alt="my profile" className="heroimg" />
          <img src={HeroImage5} alt="my profile" className="heroimg" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
