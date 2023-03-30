import styled, { css } from "styled-components";

export const DefaultBtn = styled.button(
  ({ theme: { palette, typography } }) => {
    return css`
    -webkit-tap-highlight-color: transparent;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 1rem 2.4rem;
      gap: 0.8rem;
      height: 4rem;
      outline-color: transparent;
      border: none;
      border-radius: 100px;
      cursor: pointer;
      color: ${palette.onTertiary};
      background: ${palette.tertiary};
      transition: box-shadow 0.2s ease-out;
      position: relative;
      z-index: 1;

      // Add typography styles to all buttons
      ${typography.label.large}
      &:focus-visible {
        outline: none;
      }

      margin-bottom: 1.6rem;
    `;
  }
);

export const ElevatedBtn = styled(DefaultBtn)(
  ({ theme: { palette, elevation, state } }) => {
    console.log(elevation);
    return css`
      color: ${palette.primary};
      ${elevation.surface.level1};
      ${elevation.shadow.level1};

      &:hover {
        ${state.primary.hover};
        ${elevation.surface.level2};
        ${elevation.shadow.level2};
      }
      &:focus-visible {
        ${state.primary.focus};
        ${elevation.surface.level1};
        ${elevation.shadow.level1};
        outline: none;
      }
      &:active {
        ${state.primary.pressed};
        ${elevation.surface.level1};
        ${elevation.shadow.level1};
      }
    `;
  }
);

export const FilledBtn = styled(DefaultBtn)(
  ({ theme: { palette, elevation, state } }) => {
    return css`
      color: ${palette.onPrimary};
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

export const TonalBtn = styled(DefaultBtn)(
  ({ theme: { palette, elevation, state } }) => {
    return css`
      color: ${palette.onSecondaryContainer};
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

export const OutlinedBtn = styled(DefaultBtn)(
  ({ theme: { palette, elevation, state } }) => {
    return css`
      background: ${palette.surface};
      border-width: 0.1rem;
      border-style: solid;
      color: ${palette.primary};
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
