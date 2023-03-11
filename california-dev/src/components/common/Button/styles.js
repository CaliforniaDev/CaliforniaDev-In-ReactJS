import styled, { css } from "styled-components";

export const DefaultBtn = styled.button((props) => {
  const {
    theme: { palette },
  } = props;
  const {
    theme: { typography },
  } = props;
  return css`
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
    color: ${palette.onTertiary};
    background: ${palette.tertiary};

    // Add typography styles to all buttons
    ${typography.label.large}

    &:hover {
      cursor: pointer;
    }
  `;
});

export const ElevatedBtn = styled(DefaultBtn)((props) => {
  const {
    theme: { palette },
  } = props;
  const {
    theme: { elevation },
  } = props;
  return css`
    color: ${palette.onSurface};
    background: ${elevation.level1.surfaceColor};
    box-shadow: ${elevation.level1.shadow};
  `;
});

export const FilledBtn = styled(DefaultBtn)((props) => {
  const {
    theme: { palette },
  } = props;
  return css`
    background: ${palette.primary};
    color: ${palette.onPrimary};
  `;
});

export const TonalBtn = styled(DefaultBtn)((props) => {
  const {
    theme: { palette },
  } = props;
  return css`
    background: ${palette.secondaryContainer};
    color: ${palette.onSecondaryContainer};
  `;
});

export const OutlinedBtn = styled(DefaultBtn)((props) => {
  const {
    theme: { palette },
  } = props;
  return css`
    background: transparent;
    border-width: 0.1rem;
    border-style: solid;
    color: ${palette.primary};
    border-color: ${palette.outline};
  `;
});
