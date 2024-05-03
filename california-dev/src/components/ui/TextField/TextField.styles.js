import styled, { css } from 'styled-components';

const afterPseudoElementStyling = css`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    opacity: 0;
    pointer-events: none;

    transition:
      background-color 0.3s ease,
      opacity 0.3s ease;
  }
`;

export const Wrapper = styled.div(({ theme: { palette, typography } }) => {
  const TEXT_COLOR = palette.onSurfaceVariant;
  const ERROR_COLOR = palette.error;
  const ICON_COLOR = palette.onSurfaceVariant;
  const ERROR_ICON_COLOR = palette.error;
  return css`
    .supporting-text {
      padding: 0.4rem 1.6rem 0 1.6rem;
      color: ${TEXT_COLOR};
      ${typography.body.small}
    }
    .supporting-text.error {
      color: ${ERROR_COLOR};
    }

    .trailing-icon {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
      cursor: pointer;
      path {
        fill: ${ICON_COLOR};
      }
    }

    .trailing-icon.error {
      pointer-events: none;
      path {
        fill: ${ERROR_ICON_COLOR};
      }
    }
  `;
});

export const InputField = styled.div(({ theme: { palette } }) => {
  return css`
    position: relative;
    display: block;
    width: 100%;
    
    ${afterPseudoElementStyling}
    &:hover::after {
      background-color: ${palette.onSurface};
      opacity: 0.08;
    }
  `;
});

export const Input = styled.input(
  ({ theme: { palette, typography }, $isFocused, $multiline, $error }) => {
    const BORDER_WIDTH = $isFocused ? '2px' : '1px';
    const BORDER_COLOR = $error ? palette.error : palette.onSurfaceVariant;
    const ACTIVE_COLOR = $error ? palette.error : palette.primary;
    const HOVER_COLOR = $error ? palette.onErrorContainer : palette.onSurface;
    const CARET_COLOR = $error ? palette.error : palette.primary;
    return css`
      width: 100%;
      position: relative;
      height: ${$multiline ? '168px' : '56px'};
      padding: 2.4rem 1.6rem 0.8rem 1.6rem;

      border: none;
      /** During Focus State border style changes */
      border-bottom: ${BORDER_WIDTH} solid ${BORDER_COLOR};
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;

      background-color: ${palette.surfaceContainerHighest};
      color: ${palette.onSurface};
      caret-color: ${CARET_COLOR};

      transition:
        background-color 0.3s ease-in-out,
        box-shadow 0.3s ease-in-out,
        border 0.3s ease-in-out;

      ${typography.body.large}

      &:focus {
        outline: none;
        border-color: ${ACTIVE_COLOR};
      }

      &:hover {
        border-color: ${HOVER_COLOR};
      }

      &:hover ~ .trailing-icon.error {
        path {
          fill: ${palette.onErrorContainer};
        }
      }

      &:hover ~ ${Label} {
        color: ${$error && palette.onErrorContainer};
      }
    `;
  }
);

export const Label = styled.label(
  ({ theme: { palette, typography }, $isFocused, $isPopulated, $error }) => {
    const PADDING = $isFocused || $isPopulated ? '8px' : '16px';

    const FONT_SIZE =
      $isFocused || $isPopulated
        ? typography.body.small
        : typography.body.large;

    const COLOR = $error
      ? palette.error
      : $isFocused
      ? palette.primary
      : palette.onSurfaceVariant;

    return css`
      position: absolute;
      z-index: 1;
      left: 16px;
      right: 16px;
      text-align: left;
      padding-top: ${PADDING};
      font-size: ${FONT_SIZE};
      color: ${COLOR};
      transition: all 0.3s ease-in-out;
      pointer-events: none;

      &:hover {
        color: green;
      }
    `;
  }
);
