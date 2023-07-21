import styled, { css } from "styled-components";

export const StyledSection = styled.section(
  ({ theme: { palette, elevation, typography, media, profileImg } }) => {
    console.log(media.padding.SMALL);
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
        gap: 1.6rem;
      }

      ${media.DESKTOP`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: ${media.padding.LARGE};

        article {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }
        header {
          width: 46rem;
        }

        #photo-wrapper {
          display: flex;
          position relative;
          width: 36.8rem;
          height: 44.8rem;
        }
        .profile-img {
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

            background-color: ${palette.secondary};
            right: -20px;
            bottom: -20px;
          }

        .corner-svg {
            position: absolute;
            width: 108px;
            height: 108px;
          }

          .top-left {
            top: -64px;
            left: -64px;
          }

          .bottom-right {
            bottom: -64px;
            right: -64px;
          }

           #topRightPattern circle {
            fill: ${palette.secondary};
          }
          #bottomRightPattern circle {
            fill: ${palette.primary};
          }
      `}
    `;
  }
);
