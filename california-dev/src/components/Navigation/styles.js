import styled, { css } from "styled-components";

export const Nav = styled.nav(
  ({theme: { palette, elevation }}) => {
  return css`
    display: flex;
    height: 56px;
    background: ${palette.surface};
    ${elevation.shadow.level1};
   
  `;
});
