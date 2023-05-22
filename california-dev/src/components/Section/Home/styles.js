import styled, { css } from "styled-components";

export const StyledSection = styled.section(
  ({ theme: { palette, typography } }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      height: calc(100vh - 80px - 40px);
      padding: 4rem 2.4rem 0;

      .display {
        ${typography.display.medium}
      }

      .headline {
        ${typography.headline.medium}
      }

      .accent-color {
        color: ${palette.secondary};
      }

      #avatar-shapes {
        top: -25%;
        width: 40em;
        height: 126%;
        right: -5.4em;
        position: absolute;

        #primary-svg-dots {
          fill: ${palette.primary};
        }
        #secondary-svg-dots {
          fill: ${palette.secondary};
        }
      }

      .link-items-container {
        display: flex;
        gap: 1.6rem;
        align-items: center;
      }
      .social-links {
        display: flex;
        gap: 1.6rem;
      }
    `;
  }
);
