import Header from "../../components/header/header";
import NormalText from "../../components/normal_text/normal_text";
import linkin_icon from "../../images/linkin.png";
import twitter_icon from "../../images/twitter.png";
import "./style.scss";
const Connect = () => {
  return (
    <>
      <section className="want_to_connect" id="connect">
        <Header className="want_to_connect_header">Want to Connect?</Header>
        <NormalText
          fontWeight="500"
          textAlign="center"
          className="connect_text"
          color=" #FFFFFF"
        >
          I’m open to opportunities around Devrel/advocacy and software
          engineering roles Let’s talk on any of these socials
        </NormalText>

        <div className="linkin_and_twitter_icon">
          <a href="#">
            <img src={linkin_icon} className="icon" />
          </a>
          <a href="#">
            <img src={twitter_icon} className="icon" />
          </a>
        </div>

        <NormalText
          fontWeight="500"
          textAlign="center"
          fontSize="18px"
          color="#CCCCCC"
          className="daniel_don"
        >
          Daniel Don
        </NormalText>
      </section>
    </>
  );
};

export default Connect;
