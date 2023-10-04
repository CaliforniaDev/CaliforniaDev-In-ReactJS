import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { Nav } from 'components/Navigation/Nav';
import { NavRail } from 'components/ui/Navigation/Desktop/NavRail';
import { Button } from 'components/ui/Button';

import { ProjectContainer } from './ProjectDetails.styles';
import { projectData } from 'components/sections/Projects/data/projectData';

import { useScrollToTop } from 'hooks/useScrollToTop';

export function ProjectDetails() {
  useScrollToTop();
  const { id } = useParams();
  const project = projectData.find(project => project.id === id);
  const isTabletOrLarger = useMediaQuery({
    query: `(min-width: ${768 / 16}em)`,
  });

  if (!project) return <h1>404</h1>;

  return (
    <ProjectContainer>
      {isTabletOrLarger ? (
        <NavRail className="nav-rail" iconSet="projectDetails" />
      ) : (
        <Nav />
      )}
      <div className="content-container">
        <header>
          <p className="category">- E-Commerce Web App -</p>
          <h1>{project.title}</h1>
        </header>
        <div className="project-info">
          <p className="project-info__description">{project.description}</p>

          <ul className="project-meta">
            <li className="project-meta__item">
              <div>
                <h3 className="project-meta__title">Client</h3>
                <p>Karla Mendez</p>
              </div>
              <Button text="Open Project" variant="tonal"/>
            </li>

            <li className="project-meta__item">
              <div>
                <h3 className="project-meta__title">Technologies</h3>
                <p>HTML, CSS, Figma, React JS, </p>
              </div>
              <Button text="Code Source" variant="outlined" />
            </li>
          </ul>

        </div>
        <figure className="image-container">
          <img src={project.detailedImgSrc} alt={project.title} />
        </figure>
      </div>
    </ProjectContainer>
  );
}
