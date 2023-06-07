import styled, { css } from "styled-components";

export const ContactSection = styled.section(
  ({ theme: { palette, typography, elevation } }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 0 2.4rem;

      h2 {
        ${typography.display.small};
      }
      h3 {
        ${typography.title.small};

        span {
          white-space: nowrap;
        }
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1.6rem;
        margin: 1.6rem;
        height: auto;
      }

      .submit-button {
        border-radius: 4px;
      }
    `;
  }
);

export const RadioButtonGroup = styled.div(
  ({ theme: { typography } }) => css`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 1.6rem;
    flex-wrap: wrap;
    ${typography.body.medium};
  `
);
