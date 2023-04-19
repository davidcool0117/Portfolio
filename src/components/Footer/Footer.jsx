import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="copyright">
          본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
          <br />
          LEE YOONJAE © 2023. All Rights Reserved.
        </span>
        <div className="f-icons">
          <Insta color="white" size={"2rem"} />
          <Facebook color="white" size={"2rem"} />
          <Gitub color="white" size={"2rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
