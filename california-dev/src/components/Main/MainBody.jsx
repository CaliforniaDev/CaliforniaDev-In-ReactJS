import React, { useState, useEffect, useRef } from 'react';
import { NavigationProvider } from 'context/NavigationContext';
import { useMediaQuery } from 'react-responsive';
import { motion, useInView } from 'framer-motion';
import { motionVariants as variants } from 'components/ui/utils/motionVariants';
import { useFadeInOnLoad } from 'hooks/useFadeInOnLoad';

import { Home } from '../sections/Home';
import { Workflow } from '../sections/WorkFlow';
import { Projects } from '../sections/Projects';
import { Skills } from '../sections/Skills';
import { Contact } from '../sections/Contact';
import { MobileNav } from 'components/ui/Navigation/Mobile';
import { NavRail } from 'components/ui/Navigation/Desktop/';

//Styled Components
import { MainContainer } from './styles';

const LOADING_DELAY = 500;
const MEDIA_BREAKPOINT = 768 / 16;
const IN_VIEW_THRESHOLD = 0.7;

export function MainBody() {
  // States
  const [isInView, setIsInView] = useState(null);
  const isLoaded = useFadeInOnLoad(LOADING_DELAY);

  // References to sections
  const homeRef = useRef(null);
  const workflowRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Framer Motion hooks to track section visibility
  const homeInView = useInView(homeRef, { amount: IN_VIEW_THRESHOLD });
  const workflowInView = useInView(workflowRef, { amount: IN_VIEW_THRESHOLD });
  const projectsInView = useInView(projectsRef, { amount: IN_VIEW_THRESHOLD });
  const skillsInView = useInView(skillsRef, { amount: IN_VIEW_THRESHOLD });
  const contactInView = useInView(contactRef, { amount: IN_VIEW_THRESHOLD });

  // Update the active section based on the visibility
  useEffect(() => {
    switch (true) {
      case homeInView:
        setIsInView('#home-section');
        break;
      case workflowInView:
        setIsInView('#workflow-section');
        break;
      case projectsInView:
        setIsInView('#projects-section');
        break;
      case skillsInView:
        setIsInView('#skills-section');
        break;
      case contactInView:
        setIsInView('#contact-us-section');
        break;
      default:
        setIsInView(null);
        break;
    }
  }, [homeInView, workflowInView, projectsInView, skillsInView, contactInView]);

  const isTabletOrLarger = useMediaQuery({
    query: `(min-width: ${MEDIA_BREAKPOINT}em)`,
  });

  return (
    <MainContainer>
      <NavigationProvider>
        {isTabletOrLarger ? (
          <NavRail
            defaultRoute="/#home-section"
            isInView={isInView}
            navItemSet="main"
          />
        ) : (
          <MobileNav navItemSet="main" />
        )}
      </NavigationProvider>
      <motion.div
        variants={variants.fadeIn}
        initial="hidden"
        animate={isLoaded && 'visible'}
      >
        <Home ref={homeRef} />
        <Workflow ref={workflowRef} />
        <Projects ref={projectsRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </motion.div>
    </MainContainer>
  );
}
