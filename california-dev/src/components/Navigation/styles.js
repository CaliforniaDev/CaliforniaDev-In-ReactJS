import styled, { css } from "styled-components";

export const Nav = styled.nav(
  ({theme: { palette, elevation }}) => {
  return css`
    display: flex;
    height: 56px;
    justify-content: flex-end;
    align-items: center;
    padding: 0 2.4rem;
    background: ${palette.surface};
    ${elevation.shadow.level1};
   
  `;
});
