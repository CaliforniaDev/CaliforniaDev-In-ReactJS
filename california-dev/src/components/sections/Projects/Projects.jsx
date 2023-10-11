// Local imports
import { ProjectSection } from './Projects.styles';
import { projectData } from './data/projectData';
import { useTheme } from 'context/ThemeContext';
import { Link } from 'react-router-dom';

import { Card } from 'components/ui/Card/Card';

export const Projects = () => {
  const { themeMode } = useTheme();

  const projectsList = projectData.map(project => (
    <Link to={`/projects/${project.id}`} key={project.id}>
      <Card
        id={project.id}
        title={project.title}
        projectType={project.projectType}
        ImageComponent={project.svgThumbnail}
        src={project.staticThumbnail}
        backgroundColor={project.thumbnailBackground}
      />
    </Link>
  ));

  return (
    <ProjectSection
      $themeMode={themeMode}
      id="projects-section"
      aria-label="Recent Projects"
    >
      <div className="content-container">
        <h2 id="projects-heading">-Recent Projects-</h2>
        <ul className="card-container" aria-labelledby="projects-heading">
          {projectsList}
        </ul>
      </div>
    </ProjectSection>
  );
};
