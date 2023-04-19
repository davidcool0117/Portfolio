import React from "react";
import Toggle from "../Toggle/Toggle";
import logo from "../../img/logo.png";
import Lottie from "../Lottie/Lottie";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <a href="/">
          <Lottie />
        </a>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                SKILLS
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                PROJECTS
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="n-right">
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
