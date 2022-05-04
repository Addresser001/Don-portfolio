import Header from "../../components/header/header";
import NormalText from "../../components/normal_text/normal_text";
import Projects from "../../data/projects";
import project_image_1 from "../../images/project_image_1.png";
import project_image_2 from "../../images/project_image_2.png";
import dribble_icon from "../../images/dribble.png";
import github_icon from "../../images/github.png";
import Button from "../../components/button/button";
import "./style.scss";
const ProjectsSection = ({ project, projectSticky}) => {
  return (
    <>
      <section className="project_section">
        <Header className={project ? "header_fixed" : " "}>Projects</Header>
        <div className="npm_template">
          <img src={project_image_1} className="image" />
          <div className="text" ref={projectSticky}>
            <NormalText color="#FFFFFF" className="text_header">
              Published an NPM template package
            </NormalText>
            <NormalText
              color=" #BCBCBC"
              fontWeight="300"
              className="normal_text"
            >
              Easily setup context API with custom hooks in react
            </NormalText>
            <Button btn_text="View package" className="view_package_btn" />
          </div>
        </div>

        <div className="wrote_a_book_on_tech_container">
          <img src={project_image_2} className="image" />
          <div className="text">
            <NormalText color="#FFFFFF" className="text_header">
              Wrote a book on tech.
            </NormalText>
            <NormalText
              className="normal_text"
              color=" #BCBCBC"
              fontWeight="300"
              width="289px"
            >
              Before you begin tech
            </NormalText>
            <Button
              btn_text="Download a copy"
              className="download_a_copy_btn"
            />
          </div>
        </div>

        <NormalText
          color=" #FFFFFF"
          fontWeight="500"
          className="im_allowed_to_show"
        >
          I’m allowed to show a limited number of projects because of policies
          from diffferent companies. Here are a few projects though:
        </NormalText>

        <div className="project_interface_container">
          {Projects.map((project) => {
            const { text, header, img } = project;
            return (
              <div
                className="project_interface"
                style={{
                  backgroundImage: ` url(${img})`,
                  backgroudPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="text_container">
                  <NormalText color=" #FFFFFF" className="text_header">
                    {header}
                  </NormalText>
                  <NormalText color=" #FFFFFF" className="normal_text">
                    {text}
                  </NormalText>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="where_to_find_more_things_that_i_have_done"
         
        >
          <NormalText
            className="where_to_find_text"
            color="#FFFFFF"
            fontWeight="500"
          >
            Here’s where to find more things I’ve done:
          </NormalText>

          <div className="dribble_and_github_icons">
            <a href="#">
              <img src={dribble_icon} className="icon" />
            </a>
            <a href="#">
              <img src={github_icon} className="icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
