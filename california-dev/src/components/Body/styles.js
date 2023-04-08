import styled, { css } from "styled-components";

export const StyledBody = styled.main(({ theme: { palette } }) => {
  return css`
    margin: 80px 24px auto;
    min-height: 100dvh;
    min-height: 100vh;
    background: ${palette.background};
  `;
});

