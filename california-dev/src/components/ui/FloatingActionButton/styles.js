import styled, { css } from "styled-components";

export const FabContainer = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
`;

export const FabButton = styled.button(
  ({ theme: { palette, elevation, state } }) => {
    return css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 1.6rem;
      border: none;
      cursor: pointer;
      outline-color: transparent;
      transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
      position: relative;
      z-index: 1;
      background: ${palette.secondaryContainer};
      ${elevation.shadow.level3};
      
      #vector {
        fill: ${palette.onSecondaryContainer};
      }
      &:hover {
        ${state.onSecondaryContainer.hover};
        ${elevation.shadow.level4};
      }
      &:focus-visible {
        outline: none;
        ${elevation.shadow.level3};
        ${state.onSecondaryContainer.focus};
      }
      &:active {
        ${elevation.shadow.level3};
        ${state.onSecondaryContainer.pressed};
      }
    `;
  }
);
