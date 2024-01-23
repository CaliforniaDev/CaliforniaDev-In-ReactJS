import styled, { css } from 'styled-components';

export const StyledSection = styled.section(
  ({ theme: { palette, elevation, typography, media, profileImg } }) => {
    return css`
      display: flex;
      flex-direction: column;
      padding: 4rem ${media.padding.SMALL};
      align-items: center;
      max-height: min-content;
      margin-top: var(--mobile-nav-height);

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
      .text-wrapper {
        margin-bottom: 2.4rem;
      }

      .link-items-container {
        display: flex;
        align-items: center;
        gap: 1.6rem;
      }
      .resume-btn {
        width: 100%;
        max-width: 200px;
      }
      .social-links {
        display: flex;
        position: relative;
        gap: 1.6rem;
      }

      .corner-svg,
      .zigzag-svg {
        display: none;
      }
<<<<<<< HEAD

      ${media.DESKTOP`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 1440px; //! CHeck this
    
        gap: 3.2rem; //! Check this
        padding: ${media.padding.LARGE};
        min-height: auto;

        article {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
=======
      @media (min-width: ${media.device.tablet}) {
        .link-items-container {
          justify-content: flex-start;
>>>>>>> dev
        }
        .resume-btn {
          width: auto;
        }

        .content-container {
          display: flex;
          gap: 6rem;
          width: 100%;
          align-items: center;
          padding: 61px 61px 61px 0;
        }

        #photo-wrapper {
          display: flex;
          position: relative;
          width: 20rem;
          height: 28rem;
        }

        .profile-img {
          z-index: 1; // !Check this
          display: block;
          width: inherit;
          height: inherit;

<<<<<<< HEAD
            background-color: ${palette.primary};
            background-size: cover;
            background-position-x: center;
            background-image: url(${profileImg});
            box-shadow: ${elevation.level5};
=======
          background-color: ${palette.primary};
          background-size: cover;
          background-position-x: center;
          background-image: url(${profileImg});
          box-shadow: ${elevation.level5};
>>>>>>> dev

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
          background-color: ${palette.secondary};
          right: -20px;
          bottom: -20px;
        }

        .corner-svg {
          display: block;
          position: absolute;
        }

        .top-left {
          top: -61px;
          left: -61px;
          circle {
            fill: ${palette.primary};
          }
        }
        .bottom-right {
          bottom: -61px;
          right: -61px;
          circle {
            fill: ${palette.secondary};
          }
        }

        .zigzag-svg {
          display: block;
          position: absolute;
        }
        .zigzag-svg.secondary {
          left: -80px;
          top: 280px;
          path {
            stroke: ${palette.secondary};
          }
        }
        .zigzag-svg.primary {
          top: 16px;
          right: -56px;
          transform: rotate(-45deg);
          path {
            stroke: ${palette.primary};
          }
        }
        .zigzag-svg.small {
          top: 24px;
          path {
            stroke: ${palette.primary};
          }
          pointer-events: none;
        }
      }
      @media (min-width: ${media.device.tablet}) {
        margin-top: 0; // resets margin set up for scrollMargin 
      }
      @media (min-width: ${media.device.tabletLarge}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 3.2rem;
        padding: ${media.padding.SMALL};

        article {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          gap: 1.6rem;
        }
        header {
          position: relative;
          max-width: 60rem;
        }

        .content-container {
          width: 100%;
          max-width: var(--desktop-max-width);
          margin-inline: auto;
        }
      } // end of tablet large media query

      @media (min-width: ${media.device.desktop}) {
        padding: ${media.padding.LARGE};
       
        .display {
          ${typography.display.large}
        }
        .headline {
          ${typography.headline.large}
        }
        p {
          ${typography.body.xlarge}
        }

        #photo-wrapper {
          width: 30rem;
          height: 38rem;
        }

        .zigzag-svg.secondary {
          left: -100px;
          top: 400px;
        }
      }
      @media (min-width: ${media.device.xlarge}) {
        padding: ${media.padding.XLARGE};
      }
    `;
  }
);

/* .content-container {
          position: relative;
          width: 100%;
          display: flex;
          margin-inline: auto;
          max-width: var(--desktop-max-width);
          padding: 61px 61px 61px 0; // * 61px is the size of the corner svg
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
          box-shadow: ${elevation.level5};

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
        }

        .top-left {
          top: -61px;
          left: -61px;
          circle {
            fill: ${palette.primary};
          }
        }
        .bottom-right {
          bottom: -61px;
          right: -61px;
          circle {
            fill: ${palette.secondary};
          }
        }

        .zigzag-svg {
          display: block;
          position: absolute;
        }
        .zigzag-svg.secondary {
          right: -140px;
          top: 216px;
          path {
            stroke: ${palette.secondary};
          }
        }
        .zigzag-svg.primary {
          top: 16px;
          right: -56px;
          transform: rotate(-45deg);
          path {
            stroke: ${palette.primary};
          }
        }
        .zigzag-svg.small {
          top: 24px;
          path {
            stroke: ${palette.primary};
          }
          pointer-events: none;
        }
        .text-wrapper {
          margin-bottom: 0;
        } */
