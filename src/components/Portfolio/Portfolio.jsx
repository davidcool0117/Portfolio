import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Komsco from "../../img/Komsco.png";
import PerPet from "../../img/PerPet.png";
import YORIJORI from "../../img/YORIJORI.png";
import PortfolioImg from "../../img/PortfolioImg.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{color: darkMode?'white': ''}}>RECENT</span>
      <span>PROJECTS</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Komsco} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={PerPet} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={PortfolioImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={YORIJORI} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
