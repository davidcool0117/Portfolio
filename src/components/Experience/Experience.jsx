import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { Progress } from "antd";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="skills">
      <div className="experience" id="experience">
        <span style={{ color: darkMode ? "white" : "" }}>MY</span>
        <span>SKILLS</span>
      </div>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={30} />
      <Progress percent={50} status="active" />
    </div>
  );
};

export default Experience;
