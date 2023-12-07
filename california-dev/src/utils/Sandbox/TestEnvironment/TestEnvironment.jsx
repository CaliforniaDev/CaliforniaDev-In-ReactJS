import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useScrollInfo } from 'context/ScrollContext';

import { Main } from './Test.styles';
import { Home } from 'components/sections/Home';
import { Workflow } from 'components/sections/WorkFlow';
import { Projects } from 'components/sections/Projects';
import { Skills } from 'components/sections/Skills';
import { Contact } from 'components/sections/Contact';
import { MobileNav } from 'components/ui/Navigation/Mobile';
import { NavRail } from 'components/ui/Navigation/Desktop';

import { motion } from 'framer-motion';

export const useMobileNav = () => {};

const MEDIA_BREAKPOINT = 768 / 16;

export const TestEnvironment = () => {
  const [isOpen, setIstOpen] = useState(false);
  const { scrollYProgress, scrollRef } = useScrollInfo();

  const handleClick = () => {
    setIstOpen(prevState => !prevState);
  };

  const isTabletOrLarger = useMediaQuery({
    query: `(min-width: ${MEDIA_BREAKPOINT}em)`,
  });
  return (
    <Main>
      {isTabletOrLarger ? (
        <NavRail iconSet="main" />
      ) : (
        <MobileNav
          isOpen={isOpen}
          handleClick={handleClick}
          scrollYProgress={scrollYProgress}
        />
      )}
      <motion.div ref={scrollRef}>
        <Home />
      </motion.div>
      <Workflow />
      <Projects />
      <Skills />
      <Contact />
    </Main>
  );
};
