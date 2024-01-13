import React, { useState } from 'react';
import { useLoadingContext } from 'context/LoadingContext';
import { useTheme } from 'context/ThemeContext';

import { motion } from 'framer-motion';
import { StyledSection } from './Home.styles';

// UI Components
import { Button } from 'components/ui/Button';
import { IconButton } from 'components/ui/IconButton';
import { Reveal } from 'components/utils/Reveal';

// svg decorations
import {
  DotPattern,
  ZigZagPattern,
  SmallZigZagSvg,
} from 'assets/images/shapes';

// Assets
// import pdfResume from 'assets/docs/resume.pdf';

// Constants and Data
import {
  INITIAL_X_POSITION as initialXPos,
  INITIAL_ROTATE_DEGREE as initialRotateDeg,
  TRANSITION_DURATION as transitionDuration,
  socialMediaData,
} from './data/homeData';

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

const RevealWrapper = ({ children }) => {
  const isLoading = useLoadingContext();
  const {
    theme: { palette },
  } = useTheme();
  const slideColor = palette.secondary;
  return (
    <Reveal slideColor={slideColor} isLoading={isLoading}>
      {children}
    </Reveal>
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
      <RevealWrapper>
        <h2 className="headline">👋🏽 Hi There! Im,</h2>
      </RevealWrapper>
      <RevealWrapper>
        <h1 className="display">
          <span className="primary-color">LEO</span> DANIELS
        </h1>
      </RevealWrapper>
      <div className="text-wrapper">
        <RevealWrapper>
          <p>
            As a <span className="accent-color">Frontend Developer</span>, my
            dedication lies in creating interactive and engaging web
            applications.
          </p>
        </RevealWrapper>
        <br />
        <RevealWrapper>
          <p>
            With a unique blend of creativity and technical expertise, my
            specialization involves crafting intuitive and user-friendly web
            apps that focus on delivering exceptional user experiences. Always
            on the hunt for new and exciting ways to innovate, I'm committed to
            keeping up with the latest technologies and industry best practices
          </p>
        </RevealWrapper>
      </div>
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
      <ZigZagPattern className="zigzag-svg secondary" />
    </figure>
  );
};

export const Home = React.forwardRef((props, ref) => {
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
    <StyledSection ref={ref} id="home-section">
      <div className="content-container">
        <article>
          <Header />

          <div className="link-items-container">
            <RevealWrapper>
              <Button
                variant="elevated"
                text="Resume"
                // href={pdfResume}
                draggable="false"
                aria-label="my resume"
                className="resume-btn"
              />
            </RevealWrapper>
            <div
              className="social-links"
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <RevealWrapper>{socialMediaLinkElements}</RevealWrapper>
              <MovingSmallZigZagSvg coordinates={svgPosition} />
            </div>
          </div>
        </article>
        <ProfileImage />
      </div>
    </StyledSection>
  );
});

Home.displayName = 'Home';
