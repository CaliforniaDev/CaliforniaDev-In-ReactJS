import styled, { css } from "styled-components";

export const Button = styled.button`
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
  color: ${({ theme: { palette } }) => palette.onTertiary};
  background: ${({ theme: { palette } }) => palette.tertiary};

  &:hover {
    cursor: pointer;
  }
  
  // ELEVATED BUTTON STYLES
  ${({ elevated }) =>
    elevated &&
    css`
      color: ${({ theme }) => theme.palette.onSurface};
      background: ${({ theme: { elevation } }) => elevation.level1.surfaceColor};
      box-shadow: ${({ theme: { elevation } }) => elevation.level1.shadow};
    `}

  // FILLED BUTTON STYLES
  ${({ filled }) =>
    filled &&
    css`
      background: ${({ theme }) => theme.palette.primary};
      color: ${({ theme }) => theme.palette.onPrimary};
    `}
  // TONAL BUTTON STYLES
  ${({ tonal }) =>
    tonal &&
    css`
      background: ${({ theme: { palette } }) => palette.secondaryContainer};
      color: ${({ theme: { palette } }) => palette.onSecondaryContainer};
    `}
  // OUTLINE BUTTON STYLES
  ${({ outline }) =>
    outline &&
    css`
      color: ${({ theme: { palette } }) => palette.primary};};
      background: transparent;
      border-width: 1px;
      border-style: solid;
      border-color: ${({ theme: { palette } }) => palette.outline};
    `}
`;
