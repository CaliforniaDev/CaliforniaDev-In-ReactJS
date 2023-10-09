import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { motion } from 'framer-motion';

// UI Components
import { Button } from 'components/ui/Button';
import { IconButton } from 'components/ui/IconButton';

// svg decorations
import {
  DotPattern,
  ZigZagPattern,
  SmallZigZagSvg,
} from 'assets/images/shapes';

// Assets
import pdfResume from 'assets/docs/resume.pdf';

// Constants and Data
import {
  INITIAL_X_POSITION as initialXPos,
  INITIAL_ROTATE_DEGREE as initialRotateDeg,
  TRANSITION_DURATION as transitionDuration,
  socialMediaData,
} from './data/homeData';

import { StyledSection } from './Home.styles';

const MovingSmallZigZagSvg = ({ coordinates }) => {
  return (
    <motion.div
      initial={{ x: initialXPos, rotate: initialRotateDeg }}
      animate={{ x: coordinates.x }}
      transition={{ duration: transitionDuration, ease: 'easeInOut' }}
      className="zigzag-svg small"
    >
      <SmallZigZagSvg />
    </motion.div>
  );
};

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
      <div className="text-wrapper">
        <p>
          As a <span className="accent-color">Frontend Developer</span>, my
          dedication lies in creating interactive and engaging web applications.
        </p>
        <br />
        {/* DESKTOP 992px */}
        {/* <MediaQuery minWidth={`${992 / 16}em`}> */}
          <p>
            With a unique blend of creativity and technical expertise, my
            specialization involves crafting intuitive and user-friendly web apps
            that focus on delivering exceptional user experiences. Always on the
            hunt for new and exciting ways to innovate, I'm committed to keeping
            up with the latest technologies and industry best practices
          </p>
      </div>
      {/* </MediaQuery> */}
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

  const socialMediaLinkElements = socialMediaData.map(social => (
    <SocialMediaLink
      key={social.name}
      {...social}
      onHover={() => setHoveredIcon(social.name)}
    />
  ));

  const svgPosition = socialMediaData.find(link => link.name === hoveredIcon)
    ?.position || { x: initialXPos };

  return (
    <StyledSection id="home-section">
      <div className="content-container">
        <article className="content-container">
          <Header />
          <div className="link-items-container">
            <Button
              variant="elevated"
              text="Resume"
              href={pdfResume}
              draggable="false"
              aria-label="my resume"
              className="resume-btn"
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
      </div>
    </StyledSection>
  );
};
