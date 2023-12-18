import React from 'react';
// Local imports
import { ProjectSection } from './Projects.styles';
import { projectData } from './data/projectData';
import { useTheme } from 'context/ThemeContext';
import { Link } from 'react-router-dom';

import { Card } from 'components/ui/Card/Card';

import { motion } from 'framer-motion';

export const Projects = React.forwardRef((props, ref) => {
  const { themeMode } = useTheme();

  // Framer motion variants
  const listContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.3,
        when: 'beforeChildren',
      },
    },
  };

  // Framer motion variants
  const item = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    transition: {
      type: 'spring',
      stiffness: 100,
      mass: 0.3,
      delay: 2,
    },
  };

  const projectsList = projectData.map(project => {
    return (
      <motion.li variants={item} key={project.id}>
        <Link to={`/projects/${project.id}`}>
          <Card
            id={project.id}
            title={project.title}
            projectType={project.projectType}
            ImageComponent={project.svgThumbnail}
            src={project.staticThumbnail}
            backgroundColor={project.thumbnailBackground}
          />
        </Link>
      </motion.li>
    );
  });

  return (
    <ProjectSection
      ref={ref}
      $themeMode={themeMode}
      id="projects-section"
      aria-label="Recent Projects"
    >
      <div className="content-container">
        <h2 id="projects-heading">-Recent Projects-</h2>
        <motion.ul
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ threshold: 0.5, once: true }}
          className="card-container"
          aria-labelledby="projects-heading"
        >
          {projectsList}
        </motion.ul>
      </div>
    </ProjectSection>
  );
});

Projects.displayName = 'Projects';