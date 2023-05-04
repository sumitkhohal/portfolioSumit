import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import mongo from "../assets/mongodb.png";
import redux from "../assets/redux.png";
import python from "../assets/python.png";
import "./ExperienceStyles.css";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "hmtl",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "scs",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "scriptjava",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "jsreact",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
      style: "redux",
    },
    {
      id: 6,
      src: graphql,
      title: "GraphQL",
      style: "graphql",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "github",
    },
    {
      id: 8,
      src: python,
      title: "Python",
      style: "python",
    },
    {
      id: 9,
      src: mongo,
      title: "MongoDB",
      style: "mongo",
    },
  ];

  return (
    <div name="experience" className="experience">
      <div className="experiencediv">
        <div>
          <p className="experiencep">Experience</p>
          <p className="experiencep2">
            As a front-end developer, I've had the opportunity to work with a
            wide range of technologies and tools to create responsive and
            engaging websites. From HTML and CSS to JavaScript and beyond, I've
            leveraged my skills and knowledge to create dynamic user experiences
            that not only look great but also function seamlessly across
            different platforms.
          </p>
          <p className="experiencep3">
            Through my experience, I've learned how to optimize code for
            performance, accessibility, and SEO, while also staying up-to-date
            with the latest trends and best practices in the industry. Whether
            it's developing web apps, creating interactive animations with
            React, or integrating APIs with React.js, I'm always eager to take
            on new challenges and push the boundaries of what's possible.
          </p>
          <p className="experiencep4">
            On this page, you'll find some examples of my work with various
            front-end technologies and various API's technologies that
            showcasing my ability to create intuitive and visually appealing
            interfaces that deliver on both form and function.
          </p>
        </div>

        <div className="expcontainer">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`expinner ${style}`}>
              <img src={src} alt="" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
