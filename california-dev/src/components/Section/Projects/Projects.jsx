import { useState } from "react";
import { CardContainer } from "./styles";
import { ProjectSection } from "./styles";
import MemoryGameImage from "assets/images/projects/MemoryGame.png";
import { DoubleArrowDown } from "assets/images/icons/DoubleArrowDown";

const projectItems = {
  MemoryGame: {
    title: "Memory Game",
    description: "A simple memory game built with React",
    imageSrc: MemoryGameImage,
  },
  //Add more projects here
};
const ProjectCard = ({ project, isOpen, toggleOpen }) => {
  return (
    <CardContainer onClick={toggleOpen}>
      <figure className="project-media-container">
        <img src={project.imageSrc} alt={project.title} />
      </figure>
      <article className="project-description">
        <header className="project-header">
          <h3>{project.title}</h3>
          <DoubleArrowDown className="icon" onClick={toggleOpen} />
        </header>
        {isOpen && <p>{project.description}</p>}
      </article>
    </CardContainer>
  );
};

export const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ProjectSection aria-label="Recent Projects">
      <h2>Recent Projects</h2>
      {Object.values(projectItems).map((project, index) => (
        <div className="items-wrapper">
          <ProjectCard
            key={index}
            project={project}
            isOpen={isOpen}
            toggleOpen={toggleOpen}
          />
        </div>
      ))}
    </ProjectSection>
  );
};
