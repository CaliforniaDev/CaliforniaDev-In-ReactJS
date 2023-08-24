import styled, { css } from 'styled-components';
import {useTheme} from "context/ThemeContext";

export const ProjectSection = styled.section(
  ({ theme: { palette, elevation, typography, media }, themeMode }) => {
    return css`
      --vertical-padding: 4rem;
      display: flex;
      flex-direction: column;
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .card {
        flex-basis: 100%;
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 1.6rem;
        flex-shrink: 1;
        flex-grow: 0;
        color: ${palette.onSurfaceVariant};
        ${elevation.surface.level1};
        ${elevation.shadow.level1};
      }
      .card-img__container {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 15em;
        background-color: ${palette.surfaceVariant};
        padding: 24px;

        img {
          height: 100%;
          width: auto;
          object-fit: contain; 
          object-position: center;
        }
      }

      #nybble-box-project figure {
        background-color: ${themeMode === 'light' ? palette.surfaceVariant : null};
      }
      .split-shifts {
        background-color: #D7756B !important;
      }

      .card__info {
        padding: 1.6rem;
      }

      ${media.tabletSmall`
        .card {
          flex-basis: calc((100% - 1.6rem) / 2);
        }
        .card-img__container  img {
          height: auto;
          width: 100%;
        }
  
      `} // End of tabletSmall media query

      ${media.TABLET`
        padding: var(--vertical-padding) ${media.padding.SMALL};
        .card {
          flex-basis: calc((100% - 1.6rem) / 2);
        }
      `} // End of TABLET media query

      ${media.DESKTOP`
        padding: var(--vertical-padding) ${media.padding.LARGE};
        
        h2 {
          ${typography.headline.large};
        }
        .card-container {
          justify-content: flex-start;
        }
        .card {
          flex-basis: calc((100% - 3.2rem) / 3);
          margin-right: 1.6rem;
        }
        .card:nth-child(3n) {
          margin-right: 0;
        }

      `}// End of DESKTOP media query
    `;
  }
);