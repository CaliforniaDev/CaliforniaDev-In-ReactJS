import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView, useAnimation } from 'framer-motion';

// Reveal component: A component that animates to reveal its children.
// It can be wrapped around any HTML element in React.
export const Reveal = ({
  children,
  width = 'fit-content', // Width of the component
  isLoading = false,
  slideColor = 'var(--color-primary)',
  riseDuration = 0.5, // Duration of the rise animation
  riseDelay = 0.25, // Delay of the rise animation
  textDuration = 0.75, // Duration of the text reveal animation
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const riseAndAppearControls = useAnimation();
  const textRevealControls = useAnimation();

  // Triggers the animations when the component is in view and not loading
  useEffect(() => {
    if (isInView && !isLoading) {
      riseAndAppearControls.start('visible');
      textRevealControls.start('visible');
    }
  }, [isInView, isLoading, riseAndAppearControls, textRevealControls]);

  // Animation Variants
  const variants = {
    riseAndAppear: {
      hidden: { opacity: 0, y: 75 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: riseDuration,
          delay: riseDelay,
          ease: 'easeIn',
        },
      },
    },
    textReveal: {
      hidden: { left: 0 },
      visible: {
        left: '100%',
        transition: { duration: textDuration, ease: 'easeIn' },
      },
    },
  };
  const riseAndAppearStyle = {
    position: 'relative',
    overflow: 'hidden',
  };
  const textRevealStyle = {
    position: 'absolute',
    top: 1,
    bottom: 1,
    left: 0,
    right: 0,
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{ ...riseAndAppearStyle, width }}
    >
      <motion.div
        variants={variants.riseAndAppear}
        initial="hidden"
        animate={riseAndAppearControls}
      >
        {children}
      </motion.div>

      {/* Text Reveal Animation */}
      <motion.div
        variants={variants.textReveal}
        initial="hidden"
        animate={textRevealControls}
        style={{ ...textRevealStyle, background: slideColor }}
      />
    </div>
  );
};

Reveal.propType = {
  children: PropTypes.node,
  width: PropTypes.string,
  slideColor: PropTypes.string,
  className: PropTypes.string,
  textDuration: PropTypes.number,
  riseDuration: PropTypes.number,
  riseDelay: PropTypes.number,
  isLoading: PropTypes.bool,
};
