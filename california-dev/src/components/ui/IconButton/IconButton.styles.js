import styled, { css } from 'styled-components';
import { createDynamicButton } from '../utils/buttonUtils';
const defaultButtonStyling = ({ palette, typography }) => css`
  display: inline-flex;
  /* -webkit-tap-highlight-color: transparent; */
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  outline-color: transparent;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  color: ${palette.onTertiary};
  background: ${palette.tertiary};
  transition:
    background-color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:focus-visible {
    outline: none;
  }
`;
// ::after Pseudo-element Transition Styling for Button STATE-OVERLAY-COLOR
const afterPseudoElementStyling = css`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition:
      background-color 0.3s ease,
      opacity 0.3s ease;
    pointer-events: none;
    opacity: 0;
  }
`;
export const DefaultIconBtn = createDynamicButton(
  styled.button(
    ({ theme }) => css`
      ${defaultButtonStyling(theme)}
      ${afterPseudoElementStyling}
    `
  )
);

export const TargetAreaWrapper = styled.div`
  display: inline-flex;
  width: 4.8rem;
  height: 4.8rem;
  align-items: center;
  justify-content: center;
`;

export const FilledBtn = styled(DefaultIconBtn)(({
  theme: { palette, elevation, state },
}) => {
  return css`
    // Selects svg path
    #vector {
      fill: ${palette.onPrimary};
    }
    background: ${palette.primary};
    ${elevation.shadow.level0};

    &:hover {
      ${elevation.shadow.level1};
      &::after {
        background-color: ${state.onPrimary.hover};
        opacity: 1;
      }
    }
    &:focus-visible {
      ${elevation.shadow.level0};

      &::after {
        background-color: ${state.onPrimary.focus};
        opacity: 1;
      }
    }
    &:active {
      ${elevation.shadow.level0};
      &::after {
        background-color: ${state.onPrimary.pressed};
        opacity: 1;
      }
    }
  `;
});

export const TonalBtn = styled(DefaultIconBtn)(({
  theme: { palette, elevation, state },
}) => {
  return css`
    // Selects svg path
    #vector {
      fill: ${palette.onSecondaryContainer};
    }
    background: ${palette.secondaryContainer};
    ${elevation.shadow.level0};
    &:hover {
      ${elevation.shadow.level1};
      &::after {
        background-color: ${state.onSecondaryContainer.hover};
        opacity: 1;
      }
    }
    &:focus-visible {
      ${elevation.shadow.level0};
      &::after {
        background-color: ${state.onSecondaryContainer.focus};
        opacity: 1;
      }
    }
    &:active {
      ${elevation.shadow.level0};
      &::after {
        background-color: ${state.onSecondaryContainer.pressed};
        opacity: 1;
      }
    }
  `;
});

export const OutlinedBtn = styled(DefaultIconBtn)(({
  theme: { palette, elevation, state },
}) => {
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
    &:hover::after {
      background-color: ${state.primary.hover};
      opacity: 1;
    }
    &:focus-visible {
      border-color: ${palette.primary};
      &::after {
        background-color: ${state.primary.focus};
        opacity: 1;
      }
    }
    &:active {
      border-color: ${palette.outline};
      &::after {
        background-color: ${state.primary.pressed};
        opacity: 1;
      }
    }
  `;
});
