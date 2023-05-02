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
            These are the technologies I've worked with
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
