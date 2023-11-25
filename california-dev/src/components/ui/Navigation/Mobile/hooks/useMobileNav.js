import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useTransform,
} from 'framer-motion';

export const useMobileNav = scrollYProgress => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFab, setIsFab] = useState(false);
  const [logoOpacity, setLogoOpacity] = useState(1);
  // const [navPosition, setNavPosition] = useState(0);

  // const menuSize = '100%';
  // const viewportHeight = window.innerHeight;
  // const navHeight = 80;

  const frame = {
    initial: 0,
    logoFadeOut: 0.001,
    reachMinWidth: 0.2,
    startTopPositionChange: 0.3,
    endTopPositionChange: 0.5,
  };

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    setIsFab(latest > 0.6);
  });

  const width = useTransform(
    scrollYProgress,
    [frame.initial, frame.reachMinWidth],
    ['100%', '0%']
  );

  const opacity = useTransform(
    scrollYProgress,
    [frame.initial, frame.logoFadeOut],
    [1, 0]
  );
  useMotionValueEvent(opacity, 'change', latest => {
    setLogoOpacity(latest);
  });

  const handleMenuLinkClick = () => {};

  const handleMenuToggle = () => setIsMenuOpen(prevState => !prevState);

  return {
    isMenuOpen,
    // menuSize,
    handleMenuToggle,
    handleMenuLinkClick,
    width,
    // opacity,
    // position,
    // display,
    logoOpacity,
    // navPosition,
    isFab,
  };
};

// const position = useTransform(
//   scrollYProgress,
//   [frame.startTopPositionChange, frame.endTopPositionChange],
//   [0, 1]
// );

// useMotionValueEvent(position, 'change', latest => {
//   console.log(latest, "latest");
//   const fromTop = (viewportHeight - navHeight) * latest;
//   setNavPosition(fromTop);
// })

// const display = useTransform(scrollYProgress, pos =>
//   pos > frame.startTopPositionChange ? 'none' : 'block'
// );
