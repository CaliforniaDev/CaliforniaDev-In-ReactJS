import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { NavigationProvider } from 'context/NavigationContext';
import { useLoadingContext } from 'context/LoadingContext';

import { NavRail } from 'components/ui/Navigation/Desktop/NavRail';
import { MobileNav } from 'components/ui/Navigation/Mobile';
import { Button } from 'components/ui/Button';

import { ProjectContainer } from './ProjectDetails.styles';
import { projectData } from 'components/sections/Projects/data/projectData';

import { useScrollToTop } from 'hooks/useScrollToTop';
import { motionVariants as variants } from 'components/ui/utils/motionVariants';

const TABLET_MIN_WIDTH_EM_UNIT = 768 / 16;

function renderNavigation(isTabletOrLarger) {
  return isTabletOrLarger ? (
    <NavRail className="nav-rail" navItemSet="projectDetails" />
  ) : (
    <MobileNav navItemSet="projectDetails" />
  );
}

function renderTechStack(techStack) {
  return techStack.map((item, index) => {
    return index === techStack.length - 1 ? item : `${item} • `;
  });
}

const ProjectMeta = ({ project }) => (
  <ul className="project-meta">
    <li className="project-meta__item">
      <div>
        <h3 className="project-meta__title">Client</h3>
        <p>{project.client}</p>
      </div>
      {project.livePreview && (
        <Button
          text="Open Project"
          variant="tonal"
          href={project.livePreview}
          aria-label="Open live project"
          draggable="false"
        />
      )}
    </li>

    <li className="project-meta__item">
      <div>
        <h3 className="project-meta__title">Technologies</h3>
        <p>{renderTechStack(project.techStack)}</p>
      </div>
      {project.repository && (
        <Button
          text="Code Source"
          variant="outlined"
          href={project.repository}
          aria-label="Open project repository"
          draggable="false"
        />
      )}
    </li>
  </ul>
);

export const ProjectDetails = () => {
  useScrollToTop();
  const isLoading = useLoadingContext();
  const { id } = useParams();
  const project = projectData.find(project => project.id === id);
  
  const isTabletOrLarger = useMediaQuery({
    query: `(min-width: ${TABLET_MIN_WIDTH_EM_UNIT}em)`,
  });

  if (!project) return <h1>404</h1>;

  return (
    <ProjectContainer>
      <NavigationProvider>
        {renderNavigation(isTabletOrLarger)}
      </NavigationProvider>

      <motion.div
        variants={variants.fadeIn}
        initial="hidden"
        animate={!isLoading && 'visible'}
        className="content-container"
      >
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
          <ProjectMeta project={project} />
        </div>
        <figure className="image-container">
          <img src={project.previewImage} alt={project.title} loading="lazy" />
        </figure>
      </motion.div>
    </ProjectContainer>
  );
};
