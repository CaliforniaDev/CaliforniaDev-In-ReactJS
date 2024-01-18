import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView, useAnimation } from 'framer-motion';

/**
 * File: PopInMotion.jsx
 *
 * This file contains two components used for creating 'pop in' animations with Framer Motion:
 * - PopInMotionParent: Wraps children with a 'pop in' animation effect. Triggers when in view.
 * - PopInMotionChild: Individual child component with its own animation sequence.
 */

/**
 * PopInMotionParent
 * Wraps children with a 'pop in' animation effect using Framer Motion.
 * Triggers animation when the component is in view and not loading.
 *
 * Props:
 * - children: React nodes to animate.
 * - className: (optional) CSS class for styling.
 * - isLoading: (optional) Delays animation until false.
 */
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

/**
 * PopInMotionChild
 * Individual animated child for PopInMotionParent.
 * Scales and rotates from hidden to visible state.
 *
 * Props:
 * - children: Content to be animated.
 * - className: (optional) CSS class for styling.
 */
export const PopInMotionChild = ({ children, className }) => {
  const variants = {
    hidden: { scale: 0 },
    visible: {
      rotate: 360,
      scale: 1,
      transition: {
        type: 'spring',
        mass: 1,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      
    >
      {children}
    </motion.div>
  );
};

PopInMotionParent.prototypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

PopInMotionChild.prototypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

PopInMotionParent.defaultProps = {
  className: '',
  isLoading: false,
};
