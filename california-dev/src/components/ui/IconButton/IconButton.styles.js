import styled, { css } from 'styled-components';
import { createDynamicButton } from '../utils/buttonUtils';
const defaultButtonStyling = ({ palette }) => css`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 100px;
  outline-color: transparent;
  overflow: hidden;

  color: ${palette.onTertiary};
  background: ${palette.tertiary};

  cursor: pointer;
  transition:
    background-color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  &:focus-visible {
    outline: none;
  }
  /* -webkit-tap-highlight-color: transparent; */
`;
export const DefaultIconBtn = createDynamicButton(
  styled.button(
    ({ theme }) => css`
      ${defaultButtonStyling(theme)}

      .icon-wrapper {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
      }
      .state-layer {
        background-color: ${theme.palette.tertiary};
      }
    `
  )
);

export const TargetAreaWrapper = styled.div`
  position: relative;
  display: inline-flex;
  width: 4.8rem;
  height: 4.8rem;
  align-items: center;
  justify-content: center;
`;

export const FilledBtn = styled(DefaultIconBtn)(({
  theme: { palette, elevation },
}) => {
  const CONTENT_COLOR = palette.onPrimary;

  /** Main component styles */
  return css`
    color: ${CONTENT_COLOR};
    background: ${palette.primary};
    box-shadow: ${elevation.level0};

    /**
  * * Keep selector specificity low to allow for
  * * overriding of styles by the user
  * * svg - icon
   */
    svg path {
      fill: ${CONTENT_COLOR};
    }
    .state-layer {
      background-color: ${CONTENT_COLOR};
    }
    &:hover {
      box-shadow: ${elevation.level1};
    }
    &:focus-visible {
      box-shadow: ${elevation.level1};
    }
    &:active {
      box-shadow: ${elevation.level0};
    }
  `;
});

export const TonalBtn = styled(DefaultIconBtn)(({
  theme: { palette, elevation },
}) => {
  const CONTENT_COLOR = palette.onSecondaryContainer;

  /** Main component styles */
  return css`
    background: ${palette.secondaryContainer};
    box-shadow: ${elevation.level0};
    svg path {
      fill: ${CONTENT_COLOR};
    }
    .state-layer {
      background-color: ${CONTENT_COLOR};
    }
    &:hover {
      box-shadow: ${elevation.level1};
    }
    &:focus-visible {
      box-shadow: ${elevation.level1};
    }
    &:active {
      box-shadow: ${elevation.level0};
    }
  `;
});

export const OutlinedBtn = styled(DefaultIconBtn)(({
  theme: { palette, elevation },
}) => {
  const CONTENT_COLOR = palette.primary;

  /** Main component styles */
  return css`
    border-width: 0.1rem;
    border-style: solid;
    border-color: ${palette.outline};
    background: ${palette.surface};
    box-shadow: ${elevation.level0};

    svg path {
      fill: ${CONTENT_COLOR};
    }
    .state-layer {
      background-color: ${CONTENT_COLOR};
    }
    &:focus-visible {
      border-color: ${palette.primary};
    }
    &:active {
      border-color: ${palette.outline};
    }
  `;
});
