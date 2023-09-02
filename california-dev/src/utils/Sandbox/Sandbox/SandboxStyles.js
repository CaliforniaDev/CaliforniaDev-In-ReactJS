import styled, { css } from 'styled-components';

export const StyledDiv = styled.div(
  ({ theme: { palette, typography, state } }) => {
    return css`
      position: relative;
      border: 1px solid red;
      background-color: green;
      width: 200px;
      height: 200px;
      transition: all 0.3s ease-in-out;

      ::after {
        content: '';
        position: absolute;
        opacity: 0;
        transition: 0.2s ease-in-out;
      }

      &:hover {
        ${state.primary.focus}
      }
    `;
  }
);

export const InputWrapper = styled.div(
  ({ theme: { palette, typography, state } }) => {
    return css`
      position: relative;
      display: block; // or use "block" if you want it to take up the full line

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${state.primary.hover};
        transition: opacity 0.3s ease;
        pointer-events: none;
        opacity: 0;
      }

      &:hover::after {
        opacity: 1;
      }
    `;
  }
);

export const StyledInput = styled.input(
  ({ theme: { palette, typography } }) => css`
    color: ${palette.onSurface};
    caret-color: ${palette.primary};
    border: none;
    height: 56px;
    width: 100%;
    padding: 1.6rem;
    border-bottom: 1px solid ${palette.onSurfaceVariant};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: ${palette.surfaceVariant};

    &:focus {
      outline: none;
      border-color: ${palette.primary};
    }
  `
);

// &::after {
//   content: "";
//   position: absolute;
//   opacity: 0;
// }

// &:hover::after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.1);
//   transition: opacity 0.3s ease;
//   pointer-events: none;
//   opacity: 1;
// }
