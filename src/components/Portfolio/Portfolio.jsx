import { useEffect, useRef } from "react";
import "./Portfolio.css";
import styles from "./Portfolio.module.css";
import { Navigation, Pagination, Scrollbar, A11y, Zoom, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import project1 from "../../img/Komsco.png";
import fourniture from "../../img/PerPet.png";
import ticatalk from "../../img/YORIJORI.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const a1Ref = useRef(null);
  const a2Ref = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: a1Ref.current,
      animation: gsap.to(a1Ref.current, { opacity: 1, y: -30, duration: 1.4, ease: "power2.inOut" }), // ScrollTrigger와 연결할 애니메이션 설정
    });
    ScrollTrigger.create({
      trigger: a2Ref.current,
      animation: gsap.to(a2Ref.current, { opacity: 1, y: -30, duration: 1.4, ease: "power2.inOut" }), // ScrollTrigger와 연결할 애니메이션 설정
    });
    // ScrollTrigger와 연결할 애니메이션 설정
  }, []);

  let slideobj = [
    {
      keyword: "#HTML #CSS #Jquery",
      imgUrl: project1,
      title: "한국조폐공사 리뉴얼페이지",
      content: "한국조폐공사 홈페이지 리뉴얼작업",
      date: "2022.12.16~2023.01.12 (3주)",
      contribution: "100%",
      skill: "HTML, CSS, JS, Jquery, api",
      tech: "vscode,github,Figma",
      deploy: "GitHub, Dothome",
      page: "메인1",
      link: "https://davidcool0117.github.io/firstproject/",
      link2: "https://github.com/davidcool0117/firstproject",
    },
    {
      keyword: "#HTML #CSS #Jquery #PHP",
      imgUrl: project1,
      title: "한국조폐공사 리뉴얼페이지(php)",
      content: "한국조폐공사 홈페이지 PHP 게시판 기능추가 리뉴얼작업",
      date: "2022.12.16~2023.01.12 (3주)",
      contribution: "100%",
      skill: "HTML, CSS, JS, Jquery ,php",
      tech: "vscode, github, Figma",
      deploy: "GitHub, Dothome",
      page: "메인1, 게시판1, 로그인1",
      link: "http://davidcool12.dothome.co.kr/",
      link2: "https://davidcool0117.github.io/firstproject/",
    },
    {
      keyword: "#BootStrap #SCSS #API",
      imgUrl: ticatalk,
      member: 4,
      title: "YORIJORI",
      content: "팀프로젝트1. YORIJORI",
      date: "2023.2.6~2023.02.22 (2주)",
      contribution: "60%",
      skill: "HTML, CSS, JS, Jquery, bootstrap, Scss, api",
      tech: "vscode, github, Figma",
      deploy: "GitHub",
      page: "메인1, 서브페이지1, 로그인1",
      link: "https://davidcool0117.github.io/team_project1/",
      link2: "https://github.com/davidcool0117/team_project1",
    },
    {
      keyword: "#React #SQL #Node.js #sequlize",
      imgUrl: fourniture,
      member: 4,
      title: "PerPet",
      content: "팀프로젝트2. 펫용품샵",
      date: "2023.03.15~2023.04.04 (3주)",
      contribution: "70%",
      skill: "React, CSSmodule, antd, node.js, react, sequlize, sqllite",
      tech: "vscode, github, Figma",
      deploy: "Vercell, CloudType",
      page: "메인, 상세상품게시판, 검색페이지, 상품업로드, 로그인, 회원가입",
      link: "https://per-pet.vercel.app/",
      link2: "https://github.com/davidcool0117/PerPet",
    },

  ];
  return (
    <>
      <div className={styles.Container} id="Portfolio">
        <div className="portfolio" id="portfolio">
          <span>RECENT</span>
          <span>PROJECTS</span>
        </div>
        <Swiper
          className={styles.Swiper}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Zoom, Autoplay]}
          spaceBetween={100}
          slidesPerView={1}
          navigation
          speed={500}
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          // onSlideChange={() => console.log("slide change")}
          loop
          zoom={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        >
          {slideobj.map((item, idx) => {
            return (
              <SwiperSlide>
                <div className={styles.PortfolioContainer}>
                  <div className={styles.PortfolioInner}>
                    <div className={styles.portfolioLeftbox} data-aos="fade-right" data-aos-duration="1500">
                      <div className={styles.portfolioImgbox}>
                        <img src={item.imgUrl} alt={item.imgUrl} />
                      </div>
                    </div>
                    <div className={styles.portfolioRightbox} data-aos="fade-left" data-aos-duration="1500">
                      <div className={styles.portfolioTitlebox}>
                        <h2>
                          <span>0{idx + 1}</span>
                          <span>{item.title}</span>
                        </h2>
                      </div>
                      <div className={styles.portfolioKeyword}>{item.keyword}</div>
                      <div className={styles.portfolioTextbox}>
                        <ul className={styles.PortfolioTextul}>
                          <li>내용: {item.content}</li>
                          <li>기간: {item.date}</li>
                          <li>기여도: {item.contribution}</li>
                          <li>스킬: {item.skill}</li>
                          <li>사용프로그램: {item.tech}</li>
                          <li>배포: {item.deploy}</li>
                          <li>페이지: {item.page}</li>
                          <li>
                            <a href={item.link} ref={a1Ref} className={styles.LinkBtn}>
                              <button className="button n-button">바로가기</button>
                            </a>
                          </li>
                          <li>
                            <a href={item.link2} ref={a2Ref} className={styles.LinkBtn2}>
                              <button className="button n-button">GitHub</button>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Portfolio;