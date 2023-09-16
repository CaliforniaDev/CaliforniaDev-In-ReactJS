import styled, { css } from 'styled-components';

export const StyledSpan = styled.span(({ theme: { palette } }) => {
  return css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    opacity: 0;
    background-color: inherit;
    
    transition:
      background-color 0.3s ease,
      opacity 0.3s ease;

    &:hover {
      opacity: 0.08;
    }
    &:focus-visible {
      opacity: 0.12;
    }
    &:active {
      opacity: 0.12;
    }
  `;
});
