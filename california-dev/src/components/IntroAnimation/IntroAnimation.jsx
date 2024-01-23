import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

import { StyledDiv } from './IntroAnimation.styles';

import { CaliforniaText, DevText, Bear } from 'assets/images/intro-animation';

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

// Variants for individual text elements
const svgVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
  exit: { opacity: 0, transition: { duration: 1.5 } },
};

// Variants for the sliding animation
const slideInVariant = {
  start: { originY: 'top', translateY: '100%' },
  slideIn: {
    scaleY: [1, 0.5, 1, 0],
    translateY: '-100%',
    transition: { duration: 1.5, ease: 'easeInOut', times: [0, 0.25, 0.5, 1] },
  },
};

export const IntroAnimation = ({ onComplete }) => {
  const mainControls = useAnimation();
  const slideInControls = useAnimation();
  const [isMounted, setIsMounted] = useState(false);

  // Effect for managing component mount state
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Animation sequence effect
  useEffect(() => {
    if (isMounted) {
      const sequence = async () => {
        await mainControls.start('visible');
        await mainControls.start('exit');
        await slideInControls.start('slideIn');
        if (typeof onComplete === 'function') {
          onComplete();
        }
      };
      sequence();
    }
  }, [mainControls, slideInControls, onComplete, isMounted]);

  return (
    <StyledDiv
      variants={containerVariant}
      initial="hidden"
      animate={mainControls}
    >
      <div className="container">
        <div className="row-1">
          <motion.div className="svg-wrapper bear" variants={svgVariant}>
            <Bear
              className="intro-logo"
              idSuffix="intro"
              aria-label="Bear logo"
            />
          </motion.div>
        </div>
        <div className="row-2">
          <motion.div
            className="svg-wrapper txt-california"
            variants={svgVariant}
          >
            <CaliforniaText
              className="california-text"
              aria-label="California text"
            />
          </motion.div>
          <motion.div className="svg-wrapper txt-dev" variants={svgVariant}>
            {' '}
            <DevText className="dev-text" aria-label="Dev" />
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={slideInVariant}
        initial="start"
        animate={slideInControls}
        className="slideInDiv"
      ></motion.div>
    </StyledDiv>
  );
};

IntroAnimation.propTypes = {
  onComplete: PropTypes.func.isRequired,
};
