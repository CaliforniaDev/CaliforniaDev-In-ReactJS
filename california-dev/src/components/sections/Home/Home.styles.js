import styled, { css } from "styled-components";

export const StyledSection = styled.section(
  ({ theme: { palette, elevation, typography, media, profileImg } }) => {
    return css`
      display: flex;
      flex-direction: column;
      min-height: calc(100vh - 80px - 40px);
      padding: 4rem ${media.padding.SMALL};

      .display {
        ${typography.display.medium}
      }
      .headline {
        ${typography.headline.medium}
      }
      .primary-color {
        color: ${palette.primary};
      }
      .accent-color {
        color: ${palette.secondary};
      }

      .link-items-container {
        display: flex;
        align-items: center;
        gap: 1.6rem;
      }
      .social-links {
        display: flex;
        position: relative;
        gap: 1.6rem;
      }

      .corner-svg, .zigzag-svg {
        display: none;
      }

      ${media.DESKTOP`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 1440px; //! CHeck this
        max-height: 100vh;// ! Check this
        margin: 0 auto; // ! Check this
        gap: 3.2rem; //! Check this

        padding: ${media.padding.LARGE};

        article {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }
        header {
          position: relative;
          width: 46rem;
        }

        #photo-wrapper {
          display: flex;
          position: relative;
          width: 36.8rem;
          height: 44.8rem;
        }
        .profile-img {
            z-index: 1; // !Check this
            display: block;
            width: inherit;
            height: inherit;

            background-color: ${palette.primary};
            background-size: cover;
            background-position-x: center;
            background-image: url(${profileImg});
            ${elevation.shadow.level5};

            z-index: 1;
          }
          .outline-frame {
            position: absolute;
            width: inherit;
            height: inherit;
            border: 2px solid ${palette.primary};
            left: -20px;
            top: -20px;
          }
          .filled-frame {
            position: absolute;
            width: inherit;
            height: inherit;
            opacity: 0.8;
            backdrop-filter: blur(100px);

            background-color: ${palette.secondary};
            right: -20px;
            bottom: -20px;
          }

        .corner-svg {
            display: block;
            position: absolute;
            width: 108px;
            height: 108px;
          }

          .top-left {
            top: -55px;
            left: -55px;
          }
          .bottom-right {
            bottom: -55px;
            right: -55px;
          }
           #topRightPattern circle {
            fill: ${palette.secondary};
          }
          #bottomRightPattern circle {
            fill: ${palette.primary};
          }

          .zigzag-svg {
            display: block;
            position: absolute;
          }
          .zigzag-svg.secondary {
            right: -140px;
            top: 216px;
            path { stroke: ${palette.secondary};}
          }
          .zigzag-svg.primary {
            top: 16px;
            right: -56px; 
            transform: rotate(-45deg);
            path {stroke: ${palette.primary};}
          }
          .zigzag-svg.small {
            top: 24px;
            path {stroke: ${palette.primary};}
            pointer-events: none;
            
          }
         
      `}
    `;
  }
);
