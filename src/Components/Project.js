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
import project4 from "../assets/graphqlproject.png";

import "./ProjectStyles.css";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      code: "https://github.com/sumitkhohal/graphqlreact",
      demo: "https://my-graphql-react-app.vercel.app/",
    },
    {
      id: 2,
      src: project2,
      code: "https://github.com/sumitkhohal/PREDICTION-PRICE-OF-BOOSTON-HOUSE",
      demo: "https://youtu.be/npDrU-o5SYA",
    },
    {
      id: 3,
      src: project3,
      code: "https://github.com/sumitkhohal/AVES-AUTOMATIC-VEHICLE-ENTRY-SYSTEM-",
      // demo: "https://my-graphql-react-app.vercel.app/",
    },
    {
      id: 4,
      src: project4,
      code: "https://github.com/sumitkhohal/graphqlreact",
      demo: "https://my-graphql-react-app.vercel.app/",
    },
  ];

  return (
    <div name="portfolio" className="portfolio">
      <div className="portfoliodiv">
        <div className="portfoliodiv2">
          <p>Project</p>
          <p>Check out some of my work right here</p>
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
