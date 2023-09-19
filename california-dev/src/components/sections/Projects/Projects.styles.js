import styled, { css } from 'styled-components';

export const ProjectSection = styled.section(
  ({ theme: { palette, typography, media }, themeMode }) => {
    return css`
      --vertical-padding: 4rem;
      display: flex;
      flex-direction: column;
      margin-inline: auto;
      color: ${palette.onBackground};
      padding: var(--vertical-padding) ${media.padding.SMALL};
      gap: 1.6rem;

      h2 {
        ${typography.headline.small};
      }
      h3 {
        ${typography.title.large};
      }

      .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
        gap: 1.6rem;
      }

      #nybble-box-project figure {
        background-color: ${themeMode === 'light'
          ? palette.surfaceVariant
          : null};
      }
      .split-shifts {
        background-color: #d7756b !important;
      }
      .card__info {
        padding: 1.6rem;
      }

      @media (min-width: ${media.device.tablet}) {
        padding: var(--vertical-padding) ${media.padding.SMALL};
      }

      @media (min-width: ${media.device.desktop}) {
        padding: var(--vertical-padding) ${media.padding.LARGE};
        h2 {
          ${typography.headline.large};
        }
        .content-container {
          width: 100%;
          max-width: var(--desktop-max-width);
          margin: auto;
        }
        .card-container {
          grid-template-columns: repeat(auto-fit, minmax(312px, 1fr));
        }
      }
    `;
  }
);
