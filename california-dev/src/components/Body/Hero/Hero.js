import * as Styled from "./styles";
import profileImg from "lib/assets/images/profile.JPG";
import githubIcon from "lib/assets/images/github-icon-link.svg";
import instagramIcon from "lib/assets/images/instagram-icon.svg";
import mailIcon from "lib/assets/images/mail-icon.svg";
import resume from "lib/assets/docs/resume.pdf";
/**
 * 
 * TODO: Fix themeing around buttons and repetative styles
 */
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
    <Styled.Content id="hero__styled-content">
      <p>👋🏽 HI THERE! I'M</p>
      <h2><span className="blue-highlight">LEO</span> DANIELS
      </h2>
      <p>
        A <span className="blue-highlight">Front-end Developer </span> 
        that can create powerful, interactive applications on the web. I have an
        ardent desire to craft high quality web apps and exceptional user
        experiences. I possess the ability to learn new technologies rapidly due
        to my love of coffee. ☕
      </p>
      <SocialLinks />
    </Styled.Content>
  );
};

const SocialLinks = () => {
  return (
    <Styled.SocialLinks id="hero__styled-social-links">
      <div id="hero__">
        <a href={resume} target="_blank" id="resume-btn" className="light-font" primary> Resumé </a>
        <div className="flex-wrapper">
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
    </Styled.SocialLinks>
  )
}
