import styled, { css } from "styled-components";


export const ProjectSection = styled.section(({ theme: { palette, typography } }) => {
  return css`
    display: flex;
    flex-direction: column;
    color: ${palette.onBackground};
    padding: 4rem 2.4rem;
    gap: 3.2rem;

    h2 {
      ${typography.headline.small};
    }
    h3 {
      ${typography.title.large};
    }
  `;
});

export const CardContainer = styled.div(({ theme: { palette, elevation } }) => {
  return css`
    display: flex;
    flex-direction: column;
    width: 312px;
    height: 272px;
    border-radius: 12px;
    color: ${palette.onSurfaceVariant};
    ${elevation.surface.level1};
    ${elevation.shadow.level1};
    margin-bottom: 4rem;
    overflow: hidden;

    .project-media-container {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${palette.surfaceVariant};
      border-radius: 12px;
      height: 200px;

      img {
        transform: translateX(5px);
        width: 216px;
      }
    }

    .project-description {
      padding: 1.6rem 1.6rem 0 1.6rem;
    }
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  `;
});