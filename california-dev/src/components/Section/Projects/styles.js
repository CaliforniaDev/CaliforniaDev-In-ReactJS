import styled, { css } from "styled-components";

export const ProjectSection = styled.section(
  ({ theme: { palette, typography } }) => {
    return css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
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
  }
);

export const CardContainer = styled.div(
  ({ theme: { palette, elevation }, isOpen }) => {
    console.log(isOpen);
    return css`
      display: flex;
      flex-direction: column;
      min-width: 312px;
      min-height: 272px;
      border-radius: 12px;
      max-height: ${isOpen ? "1000px" : "272px"};
      transition: max-height 0.5s ease-in-out;
      overflow: hidden;
      color: ${palette.onSurfaceVariant};
      ${elevation.surface.level1};
      ${elevation.shadow.level1};

      .project-card__image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        min-height: 200px;
        position: relative;
        background-color: ${palette.surfaceVariant};

        #memory-game {
         transform: translateX(5px);
        width: 216px;
     }
      }

      .project-card__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-bottom: 2.4rem;
      }
      .project-card__info {
        padding: 1.6rem;
        p {
          padding-bottom: 1.6rem;
        }
      }

      .project-card__icon {
        transform: ${isOpen ? "rotate(180deg)" : "rotate(0deg)"};
        transition: transform 0.3s ease-in-out;
        .path {
          fill: ${palette.secondary};
        }
      }

      .project-card__action-buttons {
        display: flex;
        justify-content: flex-end;
        gap: 0.8rem;
      }
    `;
  }
);