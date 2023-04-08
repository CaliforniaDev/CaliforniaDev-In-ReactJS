import styled, { css } from "styled-components";

export const Nav = styled.nav(({ theme: { palette, elevation } }) => {
  return css`
    height: 8rem;
    padding: 2rem 2.4rem;
    background: ${palette.surface};
    ${elevation.shadow.level1};


    #wrapper {
      display: flex;
      height: 100%;
      justify-content: space-between;
      align-items: center;
    }
  `;
});
