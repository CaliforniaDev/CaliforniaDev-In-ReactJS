import styled, { css } from "styled-components";

const afterPseudoElementStyling = css`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    pointer-events: none;
    transition: background-color 0.3s ease, opacity 0.3s ease;
  }
`;

export const InputField = styled.div(({ theme: { state } }) => {
  return css`
    display: block;
    position: relative;
    width: 100%;
    ${afterPseudoElementStyling}
    &:hover::after {
      background-color: ${state.onSurface.hover};
      opacity: 1;
    }
  `;
});

export const Input = styled.input(
  ({ theme: { palette, typography }, isFocused, multiline }) => css`
    width: 100%;
    padding: 2.4rem 1.6rem 0.8rem 1.6rem;
    height: ${multiline ? "168px" : "56px"};
    border: none;
    border-bottom: ${isFocused ? "2px" : "1px"} solid
      ${palette.onSurfaceVariant};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: ${palette.surfaceVariant};
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
      border 0.3s ease-in-out;
    color: ${palette.onSurface};
   
    caret-color: ${palette.primary};

    ${typography.body.large}

    &:focus {
      outline: none;
      border-color: ${palette.primary};
    }
  `
);

export const Label = styled.label(
  ({ theme: { palette, typography}, isFocused, isPopulated }) => {
    return css`
      position: absolute;
      left: 16px;
      right: 16px;
      text-align: left;
      padding-top: ${isFocused || isPopulated ? "8px" : "16px"};
      font-size: ${isFocused || isPopulated
        ? typography.body.small
        : typography.body.large};
      color: ${isFocused ? palette.primary : palette.onSurfaceVariant};
      transition: all 0.3s ease-in-out;
      pointer-events: none;
      background-color: ${palette.surfaceVariant};
    `;
  }
);
