import styled, { css } from "styled-components";

export const MainContainer = styled.main(({ theme: { palette, media } }) => {
  return css`
    ${media.TABLET`
      margin-left: var(--nav-rail-width);
    `}
  `;
});
