import React from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { Nav } from 'components/Navigation/Nav';
import { NavRail } from 'components/ui/Navigation/Desktop/NavRail';
import { Button } from 'components/ui/Button';

import { ProjectContainer } from './ProjectDetails.styles';
import { projectData } from 'components/sections/Projects/data/projectData';

import { useScrollToTop } from 'hooks/useScrollToTop';

const TABLET_MIN_WIDTH_EM_UNIT = 768 / 16;

const renderNavigation = isTabletOrLarger => {
  return isTabletOrLarger ? (
    <NavRail className="nav-rail" iconSet="projectDetails" />
  ) : (
    <Nav />
  );
};

const renderTechStack = techStack => {
  return techStack.map((item, index) => {
    return index === techStack.length - 1 ? item : `${item} • `;
  });
};

export function ProjectDetails() {
  useScrollToTop();
  const { id } = useParams();
  const project = projectData.find(project => project.id === id);
  const isTabletOrLarger = useMediaQuery({
    query: `(min-width: ${TABLET_MIN_WIDTH_EM_UNIT}em)`,
  });

  if (!project) return <h1>404</h1>;

  return (
    <ProjectContainer>
      {renderNavigation(isTabletOrLarger)}
      <div className="content-container">
        <header>
          <p className="category">- {project.projectType} -</p>
          <h1>{project.title}</h1>
        </header>
        <div className="project-info">
          <div className="div-wrapper">
            {project.description?.map((paragraph, index) => (
              <p key={index} className="project-info__description">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="project-meta">
            <li className="project-meta__item">
              <div>
                <h3 className="project-meta__title">Client</h3>
                <p>{project.client}</p>
              </div>
              <Button
                text="Open Project"
                variant="tonal"
                href={project.livePreview}
                aria-label="Open live project"
                draggable="false"
              />
            </li>

            <li className="project-meta__item">
              <div>
                <h3 className="project-meta__title">Technologies</h3>
                <p>{renderTechStack(project.techStack)}</p>
              </div>
              <Button
                text="Code Source"
                variant="outlined"
                href={project.repository}
                aria-label="Open project repository"
                draggable="false"
              />
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
