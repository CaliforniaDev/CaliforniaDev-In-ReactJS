import { useRef, useEffect } from "react";
import * as Styled from "./styles";
import profileImg from "lib/assets/images/profile.JPG";
import githubIcon from "lib/assets/images/icons/github-icon-link.svg";
import instagramIcon from "lib/assets/images/icons/instagram-icon.svg";
import mailIcon from "lib/assets/images/icons/mail-icon.svg";
import resume from "lib/assets/docs/resume.pdf";
/**
 * 
 * TODO: Fix themeing around buttons and repetative styles
 */
export const Hero = () => {
  // const parallax = useRef(null);
  // useEffect(() => {
  //   function scrollHandler() {
  //     const element = parallax.current;
  //     if (element) {
  //       let offset = window.pageYOffset;
  //       console.log(offset);
  //       element.style.backgroundPositionY = offset * .12 + "px";
  //     }
  //   }
  // }, []) 
  return (
    <Styled.Section id="hero">
      <Styled.Header id="hero-header">
        <div className="profile-img-container">
          <img className="profile-img" src={profileImg} />
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
      <LinksContainer />
    </Styled.Content>
  );
};

const LinksContainer = () => {
  return (
    <Styled.LinksContainer id="hero__styled-links-container">
        <a href={resume} target="_blank" id="resume-btn" className="light-font"> Resumé </a>
        <div className="flex-wrapper">
          <a href="https://github.com/CaliforniaDev" target="_blank" className="hero__social-link" >
            <img src={githubIcon} />
          </a>
          <a href="https://www.instagram.com/leo.thedeveloper/" target="_blank" className="hero__social-link" >
            <img src={instagramIcon} />
          </a>
          <a href="mailto:leodaniels@californiaDev.com" className="hero__social-link">
            <img src= {mailIcon} />
          </a>
        </div>
    </Styled.LinksContainer>
  )
}
 
 