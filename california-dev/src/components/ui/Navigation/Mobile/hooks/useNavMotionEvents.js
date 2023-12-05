import React, { useState } from 'react';
import { useMotionValueEvent, useTransform } from 'framer-motion';
import { useScrollInfo } from 'context/ScrollContext';

export const useNavMotionEvents = () => {
  const { scrollYProgress } = useScrollInfo();
  const [isFab, setIsFab] = useState(false);
  const [logoOpacity, setLogoOpacity] = useState(1);
  const frame = {
    initial: 0,
    logoFadeOut: 0.1,
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

  return {
    width,
    logoOpacity,
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
