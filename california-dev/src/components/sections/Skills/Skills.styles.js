import styled, { css } from 'styled-components';

export const Section = styled.section(
  ({ theme: { palette, typography, elevation, media } }) => {
    return css`
      display: flex;
      flex-direction: column;
      color: ${palette.onSurface};
      background-color: ${palette.surface};
      padding: 40px ${media.padding.SMALL};
      gap: 1.6rem;

      .section-title {
        ${typography.headline.small};
        margin-bottom: 16px;
      }

      .content-container {
        max-width: var(--desktop-max-width);
        width: 100%;
        margin-inline: auto;
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
        gap: 1.6rem;
      }
      .card {
        background-color: ${palette.surfaceContainerLow};
        box-shadow: ${elevation.level1};
        border-radius: 12px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .card-title {
        padding-top: 12px;
        ${typography.title.small};
      }

      .card-icon {
        // this className is hardcoded in the svg file
        .github-icon__path {
          fill: ${palette.onSurface};
        }
      }
      @media (min-width: ${media.device.desktop}) {
        padding: ${media.padding.LARGE};
        .section-title {
          ${typography.headline.large};
        }
        .grid-container {
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        }
      }
      @media (min-width: ${media.device.xlarge}) {
        padding: ${media.padding.XLARGE};
      }
    `; // End of css return
  }
);
