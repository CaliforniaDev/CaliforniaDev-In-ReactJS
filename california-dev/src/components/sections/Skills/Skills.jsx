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

  return (
    <Section ref={ref} id="skills-section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ threshold: 0.5, once: true }}
        className="content-container"
      >
        <h2>-Skills & Technical Proficiencies-</h2>
        <div className="flex-wrapper">
          {iconComponents.map((icon, index) => (
            <motion.div
              variants={itemVariants}
              className="skills-card"
              key={index}
            >
              <icon.IconComponent className="skills-card__icon" />
              <p className="skills-card__text">{icon.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
});
