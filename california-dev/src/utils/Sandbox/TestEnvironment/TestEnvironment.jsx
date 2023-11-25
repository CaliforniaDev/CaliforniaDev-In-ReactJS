import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useScrollInfo } from 'context/ScrollContext';

import { Main } from './Test.styles';
import { Home } from 'components/sections/Home';
import { Workflow } from 'components/sections/WorkFlow';
import { Projects } from 'components/sections/Projects';
import { Skills } from 'components/sections/Skills';
import { Contact } from 'components/sections/Contact';

import { motion } from 'framer-motion';



const MEDIA_BREAKPOINT = 768 / 16;

export const TestEnvironment = () => {
  const [isOpen, setIstOpen] = useState(false);
  const { scrollYProgress, scrollRef } = useScrollInfo();

 
  const isTabletOrLarger = useMediaQuery({
    query: `(min-width: ${MEDIA_BREAKPOINT}em)`,
  });
  return (
    <Main>
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
