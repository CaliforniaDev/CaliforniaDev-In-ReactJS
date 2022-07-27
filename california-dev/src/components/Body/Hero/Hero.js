import * as Styled from "./styles";
import profileImg from "lib/assets/images/profile.JPG";
import githubIcon from "lib/assets/images/github-icon-link.svg";
import instagramIcon from "lib/assets/images/instagram-icon.svg";
import mailIcon from "lib/assets/images/mail-icon.svg";
export const Hero = () => {
  return (
    <Styled.Section id="hero">
      <Styled.Header id="hero-header">
        <div className="profile-img-container">
          <img class="profile-img" src={profileImg} />
        </div>
        <Content />
      </Styled.Header>
    </Styled.Section>
  );
};

const Content = () => {
  return (
    <Styled.Content>
      <p>👋🏽 HI THERE! I'M</p>
      <h2>
        <span className="blue-highlight" style={{fontSize: "4rem"}}>LEO</span> DANIELS
      </h2>
      <p>
        A <span className="blue-highlight">Front-end Developer </span> 
        that can create powerful, interactive applications on the web. I have an
        ardent desire to craft high quality web apps and exceptional user
        experiences. I possess the ability to learn new technologies rapidly due
        to my love of coffee. ☕
      </p>
      <div className="hero__nav-menu">
        <a href="./resume.pdf" target="_blank" id="resume-btn" className="light-font" > Resumé </a>
        <div className="hero__link-container">
          <a href="https://github.com/CaliforniaDev" target="_blank" className="hero__link" >
            <img src={githubIcon} />
          </a>
          <a href="https://www.instagram.com/leo.thedeveloper/" target="_blank" className="hero__link" >
            <img src={instagramIcon} />
          </a>
          <a href="mailto:leodaniels365@gmail.com" className="hero__link">
            <img src= {mailIcon} />
          </a>
        </div>
      </div>
    </Styled.Content>
  );
};
