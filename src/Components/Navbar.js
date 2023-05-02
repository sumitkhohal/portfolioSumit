import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../assets/logon.png";
import "./NavbarStyles.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      offset: -70,
    },
    {
      id: 2,
      link: "about",
      offset: -70,
    },
    {
      id: 3,
      link: "project",
      offset: -220,
    },
    {
      id: 4,
      link: "experience",
      offset: -70,
    },
    {
      id: 5,
      link: "contact",
      offset: -70,
    },
  ];

  return (
    <div className="nav">
      <div>
        <Link to="home" smooth duration={500} offset={-60}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <ul className="navul">
        {links.map(({ id, link, offset }) => (
          <li key={id}>
            <Link to={link} smooth duration={500} offset={offset}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="navdiv">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="navul2">
          {links.map(({ id, link, offset }) => (
            <li key={id}>
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                offset={offset}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
