import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";
import project1 from "../assets/graphqlproject.png";
import project2 from "../assets/priceprediction.png";
import project3 from "../assets/imagerecog.png";
import project4 from "../assets/project4.png";

import "./ProjectStyles.css";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project4,
      code: "https://github.com/sumitkhohal/portfolioSumit",
      demo: "https://sumitkhohal.github.io/portfolioSumit/",
    },
    {
      id: 2,
      src: project1,
      code: "https://github.com/sumitkhohal/graphqlreact",
      demo: "https://my-graphql-react-app.vercel.app/",
    },
    {
      id: 3,
      src: project2,
      code: "https://github.com/sumitkhohal/PREDICTION-PRICE-OF-BOOSTON-HOUSE",
      demo: "https://youtu.be/npDrU-o5SYA",
    },
    {
      id: 4,
      src: project3,
      code: "https://github.com/sumitkhohal/AVES-AUTOMATIC-VEHICLE-ENTRY-SYSTEM-",
      // demo: "https://my-graphql-react-app.vercel.app/",
    },
  ];

  return (
    <div name="portfolio" className="portfolio">
      <div className="portfoliodiv">
        <div className="portfoliodiv2">
          <p>Project</p>
          <p>
            Welcome to my portfolio! I'm excited to share some of the projects
            I've been working on with you. Each project represents a unique
            challenge that I approached with creativity, attention to detail,
            and a focus on delivering the best possible outcome.
          </p>
          <p>
            As you explore my projects, you'll see that I prioritize user
            experience and usability, always striving to make interfaces that
            are intuitive and easy to navigate. I believe that design should
            serve a purpose beyond just looking good - it should help users
            achieve their goals and make their lives easier.
          </p>
          <p>
            So, take a look around and see what catches your eye. Each project
            has a detailed case study outlining the goals, process, and results,
            so you can get a deeper understanding of how I work and what I can
            do. I hope you enjoy my work as much as I enjoyed creating it!
          </p>
        </div>

        <div className="project">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="projectdiv">
              <img src={src} alt="" />
              <div className="projectdiv2">
                {demo && (
                  <a href={demo} target="_blank">
                    Demo
                  </a>
                )}
                <a href={code} target="_blank">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
