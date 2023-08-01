import React, { useState } from "react";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";

import { Button } from "components/ui/Button";
import { IconButton } from "components/ui/IconButton";
import {
  GitHubIcon,
  InstagramIcon,
  MailIcon,
} from "assets/images/icons/social";
import {
  DotPattern,
  ZigZagPattern,
  SmallZigZagSvg,
} from "assets/images/shapes";

import pdfResume from "assets/docs/resume.pdf";

import { StyledSection } from "./Home.styles";

const INITIAL_X_POSITION = -260;
const INITIAL_ROTATE_DEGREE = -45;
const TRANSITION_DURATION = 0.5;

const MovingSmallZigZagSvg = ({ coordinates }) => {
  return (
    <motion.div
      initial={{ x: INITIAL_X_POSITION, rotate: INITIAL_ROTATE_DEGREE }}
      animate={{ x: coordinates.x }}
      transition={{ duration: TRANSITION_DURATION, ease: "easeInOut" }}
      className="zigzag-svg small"
    >
      <SmallZigZagSvg />
    </motion.div>
  );
};

const socialMediaData = [
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://github.com/CaliforniaDev",
    position: { x: 4 },
  },
  {
    name: "instagram",
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/leo.thedeveloper/",
    position: { x: 68 },
  },
  {
    name: "mail",
    icon: <MailIcon />,
    href: "mailto:leodaniels@californiadev.com",
    position: { x: 132 },
  },
];

const SocialMediaLink = ({ icon, href, onHover }) => (
  <IconButton
    variant="tonal"
    icon={icon}
    href={href}
    onMouseEnter={onHover}
    onFocus={onHover}
    draggable="false"
  />
);

const Header = () => {
  return (
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
          specialize in crafting intuitive and user-friendly web apps, with a
          focus on delivering exceptional user experiences. I am always looking
          for new and exciting ways to innovate, and I commit to staying
          up-to-date with the latest technologies and best practices in the
          industry. Whether I am working on a small project or a large-scale
          application, I am dedicated to delivering the best possible results.
          My passion for frontend development and my ability to adapt quickly
          make me an asset to any team.
        </p>
      </MediaQuery>
      <ZigZagPattern className="zigzag-svg secondary new" />
    </header>
  );
};

const ProfileImage = () => {
  return (
    <figure id="photo-wrapper">
      <DotPattern className="corner-svg top-left" id="topRightPattern" />
      <DotPattern className="corner-svg bottom-right" id="bottomRightPattern" />
      <span
        aria-label="Photo of Leo."
        role="img"
        className="profile-img"
      ></span>
      <span className="outline-frame"></span>
      <ZigZagPattern className="zigzag-svg primary" />
      <span className="filled-frame"></span>
    </figure>
  );
};

export const Home = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialMediaLinkElements = socialMediaData.map((social) => (
    <SocialMediaLink
      key={social.name}
      {...social}
      onHover={() => setHoveredIcon(social.name)}
    />
  ));

  const svgPosition = socialMediaData.find((link) => link.name === hoveredIcon)
    ?.position || { x: -260 };

  return (
    <StyledSection id="home-section">
      <article>
        <Header />

        <div className="link-items-container">
          <Button
            variant="elevated"
            text="Resume"
            href={pdfResume}
            draggable="false"
          />
          <div
            className="social-links"
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {socialMediaLinkElements}
            <MovingSmallZigZagSvg coordinates={svgPosition} />
          </div>
        </div>
      </article>
      <ProfileImage />
    </StyledSection>
  );
};
