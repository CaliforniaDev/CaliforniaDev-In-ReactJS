import React from "react";
import { StyledSection } from "./Home.styles";
import { IconButton } from "components/ui/IconButton";
import { Button } from "components/ui/Button";
import { GitHubIcon } from "assets/images/icons/GitHubIcon";
import { InstagramIcon } from "assets/images/icons/InstagramIcon";
import { MailFavicon } from "assets/images/icons/MailIcon";
import { BackgroundSvg } from "assets/images/shapes/BackgroundSvg";
import pdfResume from "assets/docs/resume.pdf";
export const Home = () => {
  return (
    <StyledSection id="home-section">
      <header>
        <h2 className="headline">Hi There! Im,</h2>
        <h1 className="display">LEO DANIELS</h1>
        <p>
          As a <span className="accent-color">Frontend Developer</span>, I am
          dedicated to creating interactive and engaging web applications.
        </p>
        {/* <BackgroundSvg /> */}
      </header>
      <div className="link-items-container">
        <Button variant="elevated" text="Resume" href={pdfResume} />
        <div className="social-links">
          <IconButton
            variant="filled"
            icon={<GitHubIcon />}
            href="https://github.com/CaliforniaDev"
          />
          <IconButton
            variant="filled"
            icon={<InstagramIcon />}
            href="https://www.instagram.com/leo.thedeveloper/"
          />
          <IconButton
            variant="filled"
            icon={<MailFavicon />}
            href="mailto:leodaniels@californiadev.com"
          />
        </div>
      </div>
    </StyledSection>
  );
};
