import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import profileemoji from "../../img/profileemoji.png";
import educateemoji from "../../img/educateemoji.png";
import AboutMe from "../../img/AboutMe.png";
import careeremoji from "../../img/careeremoji.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>ABOUT</span>
        <span>ME</span>
        <span>
          <img src={AboutMe} alt="" />
        </span>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div initial={{ left: "30rem" }} whileInView={{ left: "22rem" }} transition={transition} className="card1">
          <Card emoji={profileemoji} heading={"PROFILE"} detail={"1995.12.25 010.3204.9110 davidcool01@naver.com"} detail1={"화성시 동탄지성로 319-19"} />
        </motion.div>
        <motion.div initial={{ left: "1rem", top: "12rem" }} whileInView={{ left: "5rem" }} transition={transition} className="card2">
          <Card emoji={educateemoji} heading={"Education"} detail={"2023.02 고려사이버대학 빅데이터학과 졸업"} detail1={"2018.02아산폴리텍대학 방송영상학과 졸업"} />
        </motion.div>
        <motion.div initial={{ top: "19rem", left: "25rem" }} whileInView={{ left: "20rem" }} transition={transition} className="card3">
          <Card
            emoji={careeremoji}
            heading={"Career"}
            detail2={"2020.03~2020.12 엠코드 수학학원 강사2019.03~2019.12굿쌤 수학학원 강사2018~2019용인시 어린이 안전학교 행사기획"}
            detail3={"2018.03~2018.12푸른학교 아동복지 센터 강사2017.02~2017.08유쾌한 아이디어 영상편집부2016독립기념관 UCC 금상"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;
