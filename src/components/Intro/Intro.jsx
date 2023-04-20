import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import profile_img_hf1 from "../../img/profile_img_hf1.png";
import gift1 from "../../img/gift1.png";
import JsIcon from "../../img/JsIcon.png";
import reactIcon from "../../img/reactIcon.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>안녕하세요!</span>
          <span>
            선물같은 코더 <br />
            이윤재입니다
          </span>
          <span></span>
        </div>
        <div className="mainbtn">
          <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Git</button>
          </Link>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">이력서</button>
          </Link>
        </div>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={profile_img_hf1} alt="" />
        <motion.img initial={{ left: "-36%" }} whileInView={{ left: "-24%" }} transition={transition} src={gift1} alt="" />

        <motion.div initial={{ top: "-4%", left: "74%" }} whileInView={{ left: "68%" }} transition={transition} className="floating-div" animate>
          <FloatinDiv img1={reactIcon} text1="Frontend" text2="Developer" />
        </motion.div>

        <motion.div initial={{ left: "9rem", top: "18rem" }} whileInView={{ left: "0rem" }} transition={transition} className="floating-div">
          <FloatinDiv img1={JsIcon} text1="Frontend" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
