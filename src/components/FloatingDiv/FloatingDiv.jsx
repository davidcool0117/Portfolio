import React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";

import './FloatingDiv.css'


const FloatinDiv = ({ img1, img2, text1, text2 }) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
