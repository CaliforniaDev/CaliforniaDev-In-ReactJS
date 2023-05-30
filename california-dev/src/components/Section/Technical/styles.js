import styled, { css } from "styled-components";

export const TechnicalSection = styled.section(
  ({ theme: { palette, typography, elevation } }) => {
    return css`
      display: flex;
      flex-direction: column;
      color: ${palette.onBackground};
      padding: 4rem 2.4rem;

      h2 {
        ${typography.headline.small};
      }
      h3 {
        ${typography.title.large};
      }

      .grid-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
        gap: 1.6rem;
      }

      .skills-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 8rem;
        aspect-ratio: 0.8/ 1;
        border-radius: 1.2rem;
        padding: 2.4rem 2.4rem;
        ${elevation.surface.level1};
        ${elevation.shadow.level1};

        .skills-card__text {
          padding-top: 1.2rem;
          ${typography.title.small};
        }
      }

      .skills-card__icon  {
        .github-icon__path {
          fill: ${palette.onSurface};
        }
      }
    `;
  }
);
