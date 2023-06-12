import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button(({ theme: { palette } }) => {
  return css`
    display: flex;
    flex-direction: column;
  
    align-items: flex-end;
    width: 3.2rem;
    height: 2.4rem;
    background: none;
    gap: 8px;
    border: none;
    cursor: pointer;
    padding: 0;

    &:focus-visible {
      outline: none;
    }
  `;
});

export const Line = styled.span(({ theme: { palette }, width }) => {
  return css`
    display: block;
    width: ${width};
    background-color: ${palette.secondary};
    height: 0.2rem;
    border-radius: 100px;
    background: ${palette.primary.main};
    transition: width 0.3s ease-in-out;
  `;
} )
