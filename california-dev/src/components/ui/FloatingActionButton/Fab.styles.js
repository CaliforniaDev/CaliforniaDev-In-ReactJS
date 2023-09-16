import styled, { css } from 'styled-components';

export const FabContainer = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  border-radius: 1.6rem;
`;

export const FabMenu = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  display: ${({ expanded }) => (expanded ? 'flex' : 'none')};
  width: ${({ expanded, size }) => (expanded ? size : '0')};
  height: ${({ expanded, size }) => (expanded ? size : '0')};
  padding: 8px;
  border-radius: 1.6rem;

  flex-direction: column;
  align-items: center;
  gap: 8px;

  pointer-events: none;
`;

export const FabButton = styled.button(
  ({ theme: { palette, elevation }, expanded, size }) => {
    const CONTENT_COLOR = palette.onSecondaryContainer;
    /** Main component styles */
    return css`
      position: relative;
      width: ${expanded ? size : '5.6rem'};
      height: ${expanded ? size : '5.6rem'};

      border: none;
      border-radius: 1.6rem;
      overflow: hidden;

      display: flex;
      justify-content: center;
      align-items: center;

      background: ${palette.secondaryContainer};
      box-shadow: ${elevation.level3};
      opacity: 0.8;

      cursor: pointer;
      outline-color: transparent;

      transition:
        width 0.3s,
        height 0.3s,
        box-shadow 0.3s ease-in-out,
        background-color 0.3s ease-in-out;

      .icon {
        position: relative;
        pointer-events: none;
        path {
          fill: ${CONTENT_COLOR};
        }
      }
      /** State layer inherits content color */
      .state-layer {
        background-color: ${CONTENT_COLOR};
      }
      &:hover {
        box-shadow: ${elevation.level4};
      }
      &:focus-visible {
        box-shadow: ${elevation.level3};
      }
      &:active {
        box-shadow: ${elevation.level3};
      }
    `;
  }
);
