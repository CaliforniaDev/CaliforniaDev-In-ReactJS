import React from 'react';
import { Section } from './Skills.styles';
import { motion } from 'framer-motion';
import {
  HtmlIcon,
  CssIcon,
  FigmaIcon,
  AdobeIllustrator,
  GitIcon,
  GithubIcon,
  JavascriptIcon,
  PhotoshopIcon,
  ReactIcon,
} from 'assets/images/tools/';

// Framer motion variants
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

// Framer motion variants
const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
  transition: {
    type: 'spring',
    stiffness: 100,
    mass: 0.3,
    delay: 2,
  },
};

export const Skills = React.forwardRef((props, ref) => {
  const iconComponents = [
    { IconComponent: HtmlIcon, title: 'HTML' },
    { IconComponent: CssIcon, title: 'CSS' },
    { IconComponent: FigmaIcon, title: 'Figma' },
    { IconComponent: AdobeIllustrator, title: 'Illustrator' },
    { IconComponent: GitIcon, title: 'Git' },
    { IconComponent: GithubIcon, title: 'GitHub' },
    { IconComponent: JavascriptIcon, title: 'JavaScript' },
    { IconComponent: PhotoshopIcon, title: 'Photoshop' },
    { IconComponent: ReactIcon, title: 'React' },
  ];

  const skillsList = iconComponents.map((icon, index) => {
    return (
      <motion.li variants={itemVariants} key={index}>
        <div className="card">
          <icon.IconComponent className="card-icon" />
          <p className='card-title'>{icon.title}</p>
        </div>
      </motion.li>
    )
  })

  return (
    <Section ref={ref} id="skills-section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ threshold: 0.5, once: true }}
        className="content-container"
      >
        <h2 className="section-title">-Skills & Technical Proficiencies-</h2>
        <ul className="grid-container">
          {skillsList}
        </ul>
      </motion.div>
    </Section>
  );
});
