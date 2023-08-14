import styled, { css } from "styled-components";

export const ContactSection = styled.section(
  ({ theme: { palette, typography, media } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    padding: 40px ${media.padding.SMALL};

    fieldset {
      border: none; /* removes default border */
      padding: 0; /* removes default padding */
      margin: 0; /* removes default margin */
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
      gap: 16px;

      h2 {
        ${typography.display.large};
      }
      .contact-subtext {
        ${typography.headline.small};
      }
      .field-grid {
        grid-template-columns: 1fr 1fr;
      }

      .decoration-container {
        display: block;
        position: relative;
        align-self: stretch;
        width: 200px;
        background-color: ${palette.primary};
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        .dots-svg circle { fill: ${palette.onPrimary}; }
        .eclipse-svg circle { stroke: ${palette.onPrimary}; }
        .zigzag-svg path { stroke: ${palette.onPrimary}; }
      }
    `} // End of DESKTOP media query
  `// End of styles
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
