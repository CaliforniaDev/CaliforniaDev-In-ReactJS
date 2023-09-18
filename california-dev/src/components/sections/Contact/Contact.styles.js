import styled, { css } from 'styled-components';

export const ContactSection = styled.section(
  ({ theme: { palette, typography, media } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    padding: 64px ${media.padding.SMALL};
    
    .content-container {
      width: 100%;
    }
    h2 {
      ${typography.display.small};
      margin-bottom: 4px;
    }
    .contact-subtext,
    legend {
      ${typography.title.medium};

      span {
        white-space: nowrap;
      }
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 24px;
      height: auto;
    }
    .field-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .submit-button {
      border-radius: 4px;
    }

    .decoration-container {
      display: none;
    }

    ${media.DESKTOP`
      padding: 64px ${media.padding.LARGE};
      flex-direction: row;

      h2 {
        ${typography.display.large};
      }
      .content-container {
        display: flex;
        max-width: var(--desktop-max-width);
        margin: auto;
        gap: 16px;
      }
      .contact-subtext {
        ${typography.headline.small};
      }
      .field-grid {
        grid-template-columns: 1fr 1fr;
      }

      .decoration-container {
        display: block;
        overflow: hidden;
        position: relative;
        align-self: stretch;
        width: 200px;
        background-color: ${palette.primary};
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        
        .dots-svg circle { fill: ${palette.onPrimary}; }
        .eclipse-svg circle { stroke: ${palette.onPrimary}; }
        .zigzag-svg path { stroke: ${palette.onPrimary}; }

        .dots-svg, .eclipse-svg, .zigzag-svg {
          position: absolute;
        }
        .dots-svg.top {
          top: -2px;
          left: -2px;
          opacity: 0.75;
        }
        .dots-svg.bottom {
          bottom: -2px;
          right: -2px;
          opacity: 0.75;
        }
        .eclipse-svg {
          top: 60%;
          left: 40%;
          opacity: 0.6;
        }
        .zigzag-svg {
          top: 25%;
          left: -10px;
          opacity: 0.6;
        }

      }
    `}// End of DESKTOP media query
  ` // End of styles
);

export const RadioButtonFieldset = styled.fieldset(
  ({ theme: { typography, media } }) => css`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 30px;
    flex-wrap: wrap;
    ${typography.body.medium};

    legend {
      display: block;
      width: 100%;
      margin-bottom: 24px;
      ${typography.title.medium};
    }

    ${media.DESKTOP`
      flex-direction: row;
    `}
  `
);
