import styled, { css } from 'styled-components';

export const RadioLabel = styled.label(
  ({ theme: { typography } }) => css`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    position: relative;
    cursor: pointer;
    ${typography.label.large};
  `
);
export const RadioInput = styled.input(({ theme: { palette } }) => {
  const RADIO_BORDER_COLOR = palette.onSurfaceVariant;
  const RADIO_CHECKED_COLOR = palette.primary;
  const HOVERED_COLOR = palette.primary;
  const RADIO_DISABLED = palette.onSurface;
  const DISABLED_OPACITY = 0.38;
  return css`
    position: relative;
    box-sizing: border-box;
    width: 2rem;
    height: 2rem;
    padding: 0;
    border: 2px solid ${RADIO_BORDER_COLOR};
    border-radius: 50%;
    appearance: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: outline 0.1s;

    &:not(:disabled):checked {
      border-color: ${RADIO_CHECKED_COLOR};
      background-color: ${RADIO_CHECKED_COLOR};
      background-clip: content-box;
      padding: 0.4rem;
      background-image: radial-gradient(
        circle,
        ${RADIO_CHECKED_COLOR} 0%,
        ${RADIO_CHECKED_COLOR} 50%,
        transparent 60%,
        transparent 100%
      );
    }
    &:disabled {
      border-color: ${RADIO_DISABLED};
      opacity: ${DISABLED_OPACITY};
    }
    &:focus-visible {
      border-color: ${HOVERED_COLOR};
      outline: 6px solid ${HOVERED_COLOR};
    }
  `;
});

export const TargetWrapper = styled.div(
  ({ isDisabled, isChecked, theme: { palette } }) => {
    const STATE_LAYER_COLOR = isChecked ? palette.primary : palette.onSurface;
    return css`
      position: relative;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      .state-layer {
        position: absolute;
        background-color: ${STATE_LAYER_COLOR};
        width: 40px;
        height: 40px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        ${isDisabled &&
        css`
          opacity: 0;
        `}
      }

      ${!isDisabled &&
      css`
        &:hover .state-layer {
          opacity: 0.08;
        }
        &:focus-visible .state-layer {
          opacity: 0.12;
        }
        &:active .state-layer {
          opacity: 0.12;
        }
      `}
    `;
  }
);
