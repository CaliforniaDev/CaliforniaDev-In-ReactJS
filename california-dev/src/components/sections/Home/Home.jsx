import React from "react";
import { StyledSection } from "./Home.styles";
import { IconButton } from "components/ui/IconButton";
import { Button } from "components/ui/Button";

import { GitHubIcon } from "assets/images/icons/social/GitHubIcon";
import { InstagramIcon } from "assets/images/icons/social/InstagramIcon";
import { MailFavicon } from "assets/images/icons/social/MailIcon";

import MediaQuery from "react-responsive";
import pdfResume from "assets/docs/resume.pdf";

import { DotPattern } from "assets/images/shapes/DotPattern";
import { ZigZagPattern } from "assets/images/shapes/ZigZagPattern";
import { SmallZigZagSvg } from "assets/images/shapes/SmallZigZagSvg";

export const Home = () => {
  return (
    <StyledSection id="home-section">

      <article>
        <header>
          <h2 className="headline">Hi There! Im,</h2>
          <h1 className="display">
            <span className="primary-color">LEO</span> DANIELS
          </h1>
          <p>
            As a <span className="accent-color">Frontend Developer</span>, I am
            dedicated to creating interactive and engaging web applications.
          </p>
          <br />
          {/* DESKTOP 992px */}
          <MediaQuery minWidth={`${992 / 16}em`}>
            <p>
              With my unique blend of creativity and technical expertise, I
              specialize in crafting intuitive and user-friendly web apps, with
              a focus on delivering exceptional user experiences. I am always
              looking for new and exciting ways to innovate, and I commit to
              staying up-to-date with the latest technologies and best practices
              in the industry. Whether I am working on a small project or a
              large-scale application, I am dedicated to delivering the best
              possible results. My passion for frontend development and my
              ability to adapt quickly make me an asset to any team.
            </p>
          </MediaQuery>
        </header>

        <div className="link-items-container">
          <Button
            variant="elevated"
            text="Resume"
            href={pdfResume}
            draggable="false"
          />
          <div className="social-links">
            <IconButton
              variant="tonal"
              icon={<GitHubIcon />}
              href="https://github.com/CaliforniaDev"
              draggable="false"
            />
            <IconButton
              variant="tonal"
              icon={<InstagramIcon />}
              href="https://www.instagram.com/leo.thedeveloper/"
              draggable="false"
            />
            <IconButton
              variant="tonal"
              icon={<MailFavicon />}
              href="mailto:leodaniels@californiadev.com"
              draggable="false"
            />
          </div>
        </div>
      </article>
      <div className="zigzag-container">
        <ZigZagPattern className="zigzag-svg primary" />
        <ZigZagPattern className="zigzag-svg secondary" />
      </div>

      <figure id="photo-wrapper">
        <DotPattern className="corner-svg top-left" id="topRightPattern" />
        <DotPattern
          className="corner-svg bottom-right"
          id="bottomRightPattern"
        />
        <span
          aria-label="Photo of Leo."
          role="img"
          className="profile-img"
        ></span>
        <span className="outline-frame"></span>
        <span className="filled-frame"></span>
      </figure>
    </StyledSection>
  );
};
