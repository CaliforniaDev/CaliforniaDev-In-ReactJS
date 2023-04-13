import styled, { css } from "styled-components";

export const FabContainer = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
`;

export const FabMenu = styled.div`
  display: ${({ expanded }) => (expanded ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 1.6rem;
  padding: 8px;
  width: ${({ expanded, size }) => (expanded ? size : "0")};
  height: ${({ expanded, size }) => (expanded ? size : "0")};
  overflow: hidden;
  transition: width 0.3s, height 0.3s;
`;

export const FabButton = styled.button(
  ({ theme: { palette, elevation, state }, expanded, size }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 1;
      width: ${expanded ? size : "5.6rem"};
      height: ${expanded ? size : "5.6rem"};
      border-radius: 1.6rem;
      border: none;
      cursor: pointer;
      outline-color: transparent;
      transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
        width 0.3s, height 0.3s;
      background: ${palette.secondaryContainer};
      opacity: 0.8;
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
