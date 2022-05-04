import Header from "../../components/header/header";
import Data from "../../data/data";
import "./style.scss";
import { HashLink as Link } from "react-router-hash-link";

const Variety = ({ scroll, sticky, varietySticky, variety }) => {
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
          <Header className={variety ? "header_fixed" : " "}>
            Variety Content
          </Header>
          <ul className="variety_list" ref={varietySticky}>
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
