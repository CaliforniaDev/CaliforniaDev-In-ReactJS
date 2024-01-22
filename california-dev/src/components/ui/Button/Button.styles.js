import styled, { css } from 'styled-components';
import { createDynamicButton } from '../utils/buttonUtils';

// Default Button Styling
const defaultButtonStyling = ({ palette, typography }) => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2.4rem;
  height: 4rem;
  outline-color: transparent;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  color: ${palette.onTertiary};
  background-color: ${palette.tertiary};
  transition:
    background-color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  ${typography.label.large}
  &:focus-visible {
    outline: none;
  }
`;

// ::after Pseudo-element Transition Styling for Button STATE-OVERLAY-COLOR

export const DefaultBtn = createDynamicButton(
  styled.button(
    ({ theme }) => css`
      ${defaultButtonStyling(theme)}

      .button-label {
        position: relative;
        pointer-events: none;
      }
      .state-layer {
        background-color: ${theme.palette.tertiary};
      }
    `
  )
);

export const ElevatedBtn = styled(DefaultBtn)(({
  theme: { palette, elevation },
}) => {
  const CONTENT_COLOR = palette.primary;

  /** Main component styles */
  return css`
    color: ${CONTENT_COLOR};
    background-color: ${palette.surfaceContainerLow};
    box-shadow: ${elevation.level1};

    /* Nested class style - inherits color from parent component */
    .state-layer {
      background-color: ${CONTENT_COLOR};
    }
    /** Hover state */
    &:hover {
      box-shadow: ${elevation.level2};
    }

    /** Focus state */
    &:focus-visible {
      box-shadow: ${elevation.level1};
    }
    /** Active state */

    &:active {
      box-shadow: ${elevation.level1};
    }
  `;
});

export const FilledBtn = styled(DefaultBtn)(({
  theme: { palette, elevation },
}) => {
  const CONTENT_COLOR = palette.onPrimary;

  return css`
    /** Main component styles */
    color: ${CONTENT_COLOR};
    background-color: ${palette.primary};
    box-shadow: ${elevation.level0};

    /** Nested class style - inherit color from parent component */
    .state-layer {
      background-color: ${CONTENT_COLOR};
    }
    /** Hover state */
    &:hover {
      box-shadow: ${elevation.level1};
      .state-layer {
        opacity: 0.12;
      }
    }
    /** Focus state */
    &:focus-visible {
      box-shadow: ${elevation.level0};
      border: 2px solid ${palette.tertiary};
      .state-layer {
        opacity: 0.18;
      }
    }
    /** Active state */
    &:active {
      box-shadow: ${elevation.level0};
      .state-layer {
        opacity: 0.26;
      }
    }
  `;
});

export const TonalBtn = styled(DefaultBtn)(({
  theme: { palette, elevation },
}) => {
  const CONTENT_COLOR = palette.onSecondaryContainer;
  return css`
    /** Main component styles */
    color: ${CONTENT_COLOR};
    background: ${palette.secondaryContainer};
    box-shadow: ${elevation.level0};

    /** Nested class style - inherit color from parent component */
    .state-layer {
      background-color: ${CONTENT_COLOR};
    }
    /** Hover state */
    &:hover {
      box-shadow: ${elevation.level1};
    }
    /** Focus state */
    &:focus-visible {
      box-shadow: ${elevation.level0};
      .state-layer {
        opacity: 0.12;
      }
    }
    /** Active state */
    &:active {
      box-shadow: ${elevation.level0};
      .state-layer {
        opacity: 0.12;
      }
    }
  `;
});

export const OutlinedBtn = styled(DefaultBtn)(({ theme: { palette } }) => {
  const CONTENT_COLOR = palette.primary;
  return css`
    /** Main component styles */
    background: transparent;
    border-width: 0.1rem;
    border-style: solid;
    color: ${CONTENT_COLOR};
    border-color: ${palette.outline};
    /** Nested class style - inherit color from parent component */
    .state-layer {
      background-color: ${CONTENT_COLOR};
    }
    /** Focus state */
    &:focus-visible {
      border-color: ${palette.primary};
    }
    /** Active state */
    &:active {
      border-color: ${palette.outline};
    }
  `;
});
