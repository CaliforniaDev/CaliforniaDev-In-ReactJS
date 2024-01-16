

import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView, useAnimation } from 'framer-motion';

// PopInMotionParent

// This component controls the 'pop in' animation for its children. It uses Framer Motion's useInView
// hook to start the animation when the component comes into view. The 'isLoading' prop can be used to
// delay the animation until data is loaded.

export const PopInMotionParent = ({ children, className, isLoading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView && !isLoading) {
      controls.start('visible');
    }
  }, [isInView, isLoading, controls]);

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.3,
        when: 'beforeChildren',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// PopInMotionChild

// This component represents a single child in the pop in animation sequence.
// It defines its own 'hidden' and 'visible' states for the animation effect.

export const PopInMotionChild = ({ children, className }) => {
  const variants = {
    hidden: { scale: 0 },
    visible: { rotate: 360, scale: 1 },
    transition: {
      type: 'spring',
      stiffness: 100,
      mass: 1,
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
};

PopInMotionParent.prototype = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

PopInMotionChild.prototype = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

PopInMotionParent.defaultProps = {
  className: '',
  isLoading: false,
};
