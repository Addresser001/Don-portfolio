import Button from "../components/button/button";
import NormalText from "../components/normal_text/normal_text";
import hand from "../images/hand.png";
import profile_image from "../images/profile_picture.png";
import Header from "../components/header/header";
import "./style.scss";
import "antd/dist/antd.css";

import { BrowserRouter } from "react-router-dom";
import Variety from "../page sections/variety section/variety";
import ProjectsSection from "../page sections/projects section/projects";
import Connect from "../page sections/find me section/connect";
import { AlignRightOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

const LandingPage = () => {
  const [scroll, setScroll] = useState(false);

  return (
    <BrowserRouter>
      <div className="main_container">
        <section className=" introduction_section">
          <div className=" introduction_section_sub_container">
            <div className="text_container">
              <AlignRightOutlined
                className="mobile_nav_buttons"
                onClick={() => setScroll(true)}
              />
              <div className="line"></div>
              <img src={hand} className="hand_image" />
              <h2 className="text_header">Hey, You’ve entered Daniel’s den</h2>

              <NormalText className="i_write_code">
                I write code, create things, and talk too much
              </NormalText>
              <div className="see_myworks_container">
                <div className="see_myworks_sub_container">
                  <NormalText className="see_myworks_text">
                    I’ve found love in helping other people impeove, and I do
                    that through writing, organising classes, and creating
                    videos.
                  </NormalText>
                  <Button
                    btn_text="See my Works"
                    className="see_my_works_btn"
                  />
                  <span id="variety"></span>
                </div>
              </div>
            </div>

            <div className="image_container">
              {/* Profile image container */}
              <svg
                className="square_icon"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.04904"
                  y="20.549"
                  width="37"
                  height="37"
                  transform="rotate(-30 2.04904 20.549)"
                  fill="#FF5C00"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>

              <svg
                className="circle_icon"
                width="92"
                height="92"
                viewBox="0 0 92 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="46"
                  cy="46"
                  r="43.5"
                  stroke="#EB6300"
                  stroke-width="5"
                />
              </svg>

              <img src={profile_image} className="profile_image" />
              <svg
                className="triangle_icon"
                width="69"
                height="60"
                viewBox="0 0 69 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.62212 56.75L34.5 5L64.3779 56.75H4.62212Z"
                  stroke="#8EFE00"
                  stroke-width="5"
                />
              </svg>
            </div>
          </div>
        </section>
        <Variety scroll={scroll} setScroll={setScroll} />
        <ProjectsSection />
        <Connect />
      </div>
    </BrowserRouter>
  );
};

export default LandingPage;