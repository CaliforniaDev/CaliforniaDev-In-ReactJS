import styled, { css } from "styled-components";

export const StyledBody = styled.main(({ theme: { palette } }) => {
  return css`
    min-height: 100dvh;
    min-height: 100vh;
    background: ${palette.background};
  `;
});

