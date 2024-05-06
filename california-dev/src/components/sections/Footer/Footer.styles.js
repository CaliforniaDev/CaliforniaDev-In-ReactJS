import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer(
  ({ theme: { palette, typography, media } }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: ${media.padding.SMALL};
      color: ${palette.onSurfaceVariant};
      background-color: ${palette.surfaceVariant};
      p,
      a {
        ${typography.body.large}
      }
      strong {
        ${typography.body.large}
        font-weight: bold;
        color: ${palette.primary};
      }
      li {
        margin-bottom: 0.8rem;
      }
      li:hover {
        color: ${palette.secondary};
      }
      .logo-svg-wrapper {
        display: flex;
        align-items: center;
        height: 4rem;
        margin-bottom: 4rem;
      }
      .logo-svg {
        height: 100%;
        width: auto;
      }
      .logo-wordmark-svg {
        height: 3.2rem;
        width: auto;
        padding-bottom: 0.4rem;
      }

      .logo-wordmark-svg .text-california {
        path {
          fill: ${palette.onTertiaryContainer};
        }
      }

      .footer-wrapper {
        width: 100%;
        max-width: var(--desktop-max-width);
      }

      .copy-rights p {
        padding: 1.6rem 0;
        ${typography.body.small}
      }

      @media (min-width: ${media.device.desktop}) {
        padding: 2.4rem ${media.padding.LARGE};
      }
    `;
  }
);

export const Grid = styled.div(({ theme: { palette, media } }) => {
  return css`
    display: grid;
    min-height: 40dvh;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    border-bottom: 1px solid ${palette.onSurfaceVariant};
    gap: 2.4rem;

    .grid-item {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      gap: 0.8rem;
    }

    @media (min-width: ${media.device.tablet}) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      min-height: 30vh;
      gap: 0.8rem;
    }
  `;
});
