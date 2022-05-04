import Header from "../../components/header/header";
import Data from "../../data/data";
import "./style.scss";
import { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { AlignRightOutlined, CloseOutlined } from "@ant-design/icons";

const Variety = ({ scroll, setScroll }) => {
  const sticky = useRef(null);

  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const { innerWidth: width } = window;
    console.log(width);
    // window.addEventListener("load", () => {
    //   setScroll(false);
    // });

    window.addEventListener("scroll", () => {
      if (sticky.current?.getBoundingClientRect().top <= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  return (
    <>
      <section className="variety_section" ref={sticky}>
        <ul className={scroll ? "navbar_scroll_none" : "nav_bar"}>
          <li>
            {" "}
            <Link to="#variety" smooth>
              Variety content
            </Link>
          </li>
          <li>
            {" "}
            <Link to="#projects" smooth>
              Projects
            </Link>
          </li>
          <li>
            {" "}
            <Link to="#connect" smooth>
              Find me
            </Link>
          </li>
        </ul>

        <div className="variety_container">
          <Header>Variety Content</Header>
          <ul className="variety_list">
            {Data.map((datum) => {
              const { id, link, text, projID } = datum;

              return (
                <>
                  {" "}
                  <li id={projID}>
                    <a href={link}>
                      {id} {text}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Variety;
