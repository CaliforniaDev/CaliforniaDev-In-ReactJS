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

const INITIAL_X_POSITION = -85;
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
    href={href}
    onMouseEnter={onHover}
    onFocus={onHover}
  >
    {icon}
  </IconButton>
);
const Header = () => {
  return (
    <header>
      <h2 className="headline">👋🏽 Hi There! Im,</h2>
      <h1 className="display">
        <span className="primary-color">LEO</span> DANIELS
      </h1>
      <p>
        As a <span className="accent-color">Frontend Developer</span>, my
        dedication lies in creating interactive and engaging web applications.
      </p>
      <br />
      {/* DESKTOP 992px */}
      <MediaQuery minWidth={`${992 / 16}em`}>
        <p>
          With a unique blend of creativity and technical expertise, my
          specialization involves crafting intuitive and user-friendly web apps
          that focus on delivering exceptional user experiences. Always on the
          hunt for new and exciting ways to innovate, I'm committed to keeping
          up with the latest technologies and industry best practices
        </p>
      </MediaQuery>
      <ZigZagPattern className="zigzag-svg secondary new" />
    </header>
  );
};

const ProfileImage = () => {
  return (
    <figure id="photo-wrapper">
      <DotPattern className="corner-svg top-left" />
      <DotPattern className="corner-svg bottom-right" />
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
    ?.position || { x: INITIAL_X_POSITION };

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
