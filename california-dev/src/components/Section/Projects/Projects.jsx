import { useRef, useEffect, useState } from "react";
import { CardContainer, ProjectSection } from "./styles";
import { Button } from "components/ui/Button";
import { DoubleArrowDown } from "assets/images/icons/DoubleArrowDown";
import { projectList } from "./data/projectList";

const ExpandedCardContent = ({ project, isOpen }) => {
  if (!isOpen) return null;
  const paragraphs = project.description;
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div className="project-card__action-buttons">
        <Button text="Repository" variant="outlined" />
        <Button text="Live" variant="elevated" />
      </div>
    </>
  );
};

const ProjectCard = ({ project, isOpen, toggleOpen }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (isOpen && cardRef.current) {
      window.scrollTo({
        top: cardRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [isOpen]);

  return (
    <CardContainer
      onClick={toggleOpen}
      className="project-card"
      isOpen={isOpen}
      ref={cardRef}
    >
      <article className="project-card__content-wrapper">
        <figure className="project-card__image-container">
          <img src={project.imageSrc} alt={project.title} id={project.id}/>
        </figure>
        <div className="project-card__info">
          <header className="project-card__header">
            <h2>{project.title}</h2>
            <DoubleArrowDown className="project-card__icon" />
          </header>
          <ExpandedCardContent project={project} isOpen={isOpen} />
        </div>
      </article>
    </CardContainer>
  );
};



export const Projects = () => {
  const [openProjects, setOpenProjects] = useState({});

  function toggleOpen(projectId) {
    return function () {
      setOpenProjects((prevState) => ({
        ...Object.keys(prevState).reduce(
          (acc, id) => ({ ...acc, [id]: false }),
          {}
        ),
        [projectId]: !prevState[projectId],
      }));
    };
  }

  function renderProjects() {
    return Object.values(projectList).map((project) => (
      <div key={project.id} className="items-wrapper">
        <ProjectCard
          project={project}
          isOpen={openProjects[project.id]}
          toggleOpen={toggleOpen(project.id)}
        />
      </div>
    ));
  }

  return (
    <ProjectSection aria-label="Recent Projects">
      <h2>Recent Projects</h2>
      {renderProjects()}
    </ProjectSection>
  );
};
