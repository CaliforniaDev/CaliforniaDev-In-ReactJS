// Third-party library imports
import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components and assets
import { Button } from "components/ui/Button";
import { DoubleArrowDown } from "assets/images/icons/DoubleArrowDown";

// Local imports
import { CardContainer, ProjectSection } from "./Projects.styles";
import { projectData } from "./data/projectData";

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

// ProjectCardDetails component is responsible for rendering the project details and action buttons.
// It uses framer-motion for smooth height adjustment and fade-in/out animations.
// The details are only visible when the 'isProjectDetailsVisible' prop is true.
const ProjectCardDetails = ({ project, isProjectDetailsVisible }) => {
  const paragraphs = project.description;

  return (
    <AnimatePresence>
      {isProjectDetailsVisible && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={contentVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {paragraph}
            </motion.p>
          ))}
          <div className="card-action-buttons">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Button text="Repository" variant="outlined" />
              <Button text="Live" variant="elevated" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, isProjectDetailsVisible, toggleOpen }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (isProjectDetailsVisible && cardRef.current) {
      window.scrollTo({
        top: cardRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [isProjectDetailsVisible]);

  return (
    <CardContainer onClick={toggleOpen} className="project-card" ref={cardRef}>
      <article>
        <figure className="card-image-container">
          <img src={project.imageSrc} alt={project.title} id={project.id} />
        </figure>
        <div className="card-content-wrapper">
          <header className="card-header">
            <h2>{project.title}</h2>
            <DoubleArrowDown
              className={`card-icon ${isProjectDetailsVisible ? "open" : ""}`}
            />
          </header>
          <ProjectCardDetails
            project={project}
            isProjectDetailsVisible={isProjectDetailsVisible}
          />
        </div>
      </article>
    </CardContainer>
  );
};

export const Projects = () => {
  const [openProjects, setOpenProjects] = useState({});

  // The toggleOpen function is a higher-order function that returns another function.
  // This returned function toggles the open/closed state of a project card when invoked.
  // If a card is open, it closes all cards. If a card is closed, it opens it and closes all others.
  const toggleOpen = useCallback((projectId) => {
    return () => {
      setOpenProjects((prevState) => ({
        ...Object.keys(prevState).reduce(
          (acc, id) => ({ ...acc, [id]: false }),
          {}
        ),
        [projectId]: !prevState[projectId],
      }));
    };
  }, []);

  // renderProjects function maps over the project list and returns a ProjectCard for each project.
  function renderProjects() {
    return Object.values(projectData).map((project) => (
      <div key={project.id} className="items-wrapper">
        <ProjectCard
          project={project}
          isProjectDetailsVisible={openProjects[project.id]}
          toggleOpen={toggleOpen(project.id)}
        />
      </div>
    ));
  }

  return (
    <ProjectSection id="projects-section" aria-label="Recent Projects">
      <h2>Recent Projects</h2>
      {renderProjects()}
    </ProjectSection>
  );
};
