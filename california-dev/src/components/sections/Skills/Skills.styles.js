import styled, { css } from 'styled-components';

export const Section = styled.section(
  ({ theme: { palette, typography, elevation, media } }) => {
    console.log(media.padding);
    return css`
      display: flex;
      flex-direction: column;
      color: ${palette.onBackground};
      padding: 40px ${media.padding.SMALL};
      gap: 1.6rem;

      h2 {
        ${typography.headline.small};
      }
      h3 {
        ${typography.title.large};
      }

      .flex-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: -8px;

        > div {
          flex-grow: 0;
          flex-basis: calc(25% - 16px);
          max-width: calc(25% - 16px);
          margin: 8px;
        }
      }

      .skills-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        aspect-ratio: 0.8/ 1;
        border-radius: 12px;
        padding: 24px;
        background-color: ${palette.surfaceContainerLow};
        box-shadow: ${elevation.level1};

        .skills-card__text {
          padding-top: 12px;
          ${typography.title.small};
        }
      }

      .skills-card__icon {
        // this className is hardcoded in the svg file
        .github-icon__path {
          fill: ${palette.onSurface};
        }
      }
      ${media.DESKTOP`
        padding: 136px ${media.padding.LARGE};

        h2 {
          ${typography.headline.large};
        }
        .flex-wrapper > div {
          flex-basis: calc(16.5% - 16px); 
          max-width: calc(16.5% - 16px); 
        }
        .skills-card {
  
        }
      `}
    `; // End of css return
  }
);
