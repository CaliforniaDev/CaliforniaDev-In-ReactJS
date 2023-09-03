// Local imports
import { ProjectSection } from './Projects.styles';
import { projectData } from './data/projectData';
import { useTheme } from 'context/ThemeContext';

import { Card } from 'components/ui/Card/Card';

export const Projects = () => {
  const { themeMode } = useTheme();

  const renderProjects = () => {
    return projectData.map(project => (
      <Card
        id={project.id}
        key={project.id}
        title={project.title}
        projectType={project.projectType}
        ImageComponent={project.imageComponent}
        src={project.src}
        backgroundColor={project.backgroundColor}
      />
    ));
  };
  return (
    <ProjectSection themeMode={themeMode} id="projects-section" aria-label="Recent Projects">
      <h2 id="projects-heading">-Recent Projects-</h2>
      <ul
        className="card-container"
        aria-labelledby="projects-heading"
      >
        {renderProjects()}
      </ul>
    </ProjectSection>
  );
};
