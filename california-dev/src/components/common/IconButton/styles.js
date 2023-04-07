import styled, { css } from "styled-components";
import { createDynamicButton } from "../utils/buttonUtils";

export const DefaultIconBtn = createDynamicButton(
  styled.button(({ theme: { palette } }) => {
    return css`
      display: inline-flex;
      -webkit-tap-highlight-color: transparent;
      justify-content: center;
      align-items: center;
      padding: 0.4rem;
      width: 4rem;
      height: 4rem;
      outline-color: transparent;
      border: none;
      border-radius: 100px;
      color: ${palette.onTertiary};
      background: ${palette.tertiary};
      transition: box-shadow 0.2s ease-out;
      position: relative;
      z-index: 1;

      &:focus-visible {
        outline: none;
      }
    `;
  })
);

export const TargetAreaWrapper = styled.div`
  position: relative;
  display: inline-flex;
  width: 4.8rem;
  height: 4.8rem;
  align-items: center;
  justify-content: center;
`;

export const FilledBtn = styled(DefaultIconBtn)(
  ({ theme: { palette, elevation, state } }) => {
    return css`
      // Selects svg path
      #vector {
        fill: ${palette.onPrimary};
      }
      background: ${palette.primary};
      ${elevation.shadow.level0};

      &:hover {
        ${state.onPrimary.hover};
        ${elevation.shadow.level1};
      }
      &:focus-visible {
        ${state.onPrimary.focus};
        ${elevation.shadow.level0};
      }
      &:active {
        ${state.onPrimary.pressed};
        ${elevation.shadow.level0};
      }
    `;
  }
);

export const TonalBtn = styled(DefaultIconBtn)(
  ({ theme: { palette, elevation, state } }) => {
    return css`
      // Selects svg path
      #vector {
        fill: ${palette.onSecondaryContainer};
      }
      background: ${palette.secondaryContainer};
      ${elevation.shadow.level0};
      &:hover {
        ${state.onSecondaryContainer.hover};
        ${elevation.shadow.level1};
      }
      &:focus-visible {
        ${state.onSecondaryContainer.focus};
        ${elevation.shadow.level0};
      }
      &:active {
        ${state.onSecondaryContainer.pressed};
        ${elevation.shadow.level0};
      }
    `;
  }
);

export const OutlinedBtn = styled(DefaultIconBtn)(
  ({ theme: { palette, elevation, state } }) => {
    return css`
      // Selects svg path
      #vector {
        fill: ${palette.primary};
      }
      background: ${palette.surface};
      border-width: 0.1rem;
      border-style: solid;
      border-color: ${palette.outline};
      ${elevation.level0};
      &:hover {
        ${state.primary.hover}
      }
      &:focus-visible {
        border-color: ${palette.primary};
        ${state.primary.focus}
      }
      &:active {
        border-color: ${palette.outline};
        ${state.primary.pressed};
      }
    `;
  }
);
