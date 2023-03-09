import styled, { css } from "styled-components";

export const DefaultBtn = styled.button`
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
`;

export const ElevatedBtn = styled(DefaultBtn)`
  color: ${({ theme }) => theme.palette.onSurface};
  background: ${({ theme: { elevation } }) => elevation.level1.surfaceColor};
  box-shadow: ${({ theme: { elevation } }) => elevation.level1.shadow};
`;

export const FilledBtn = styled(DefaultBtn)`
  background: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.onPrimary};
`;

export const TonalBtn = styled(DefaultBtn)`
  background: ${({ theme: { palette } }) => palette.secondaryContainer};
  color: ${({ theme: { palette } }) => palette.onSecondaryContainer};
`;

export const OutlinedBtn = styled(DefaultBtn)`
  background: transparent;
  border-width: 1px;
  border-style: solid;
  color: ${({ theme: { palette } }) => palette.primary};
  border-color: ${({ theme: { palette } }) => palette.outline};
`;
