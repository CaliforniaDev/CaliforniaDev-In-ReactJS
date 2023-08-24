import styled, { css } from 'styled-components';

export const StyledListContainer = styled.li(
  ({ theme: { palette, elevation, media }, bg }) => css`
    flex-basis: 100%;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 1.6rem;
    flex-shrink: 1;
    flex-grow: 0;
    color: ${palette.onSurfaceVariant};
    ${elevation.surface.level1};
    ${elevation.shadow.level1};

    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      height: 15em;
      background-color: ${bg ? bg : palette.surfaceVariant};
      padding: 24px;
    }
    img {
      height: 100%;
      width: auto;
      object-fit: contain;
      object-position: center;
    }

    .card-info {
      padding: 24px;
    }

    @media (min-width: ${media.device.tabletSmall}) {
      flex-basis: calc((100% - 1.6rem) / 2);

      img {
        height: auto;
        width: 100%;
      }
    }

    @media (min-width: ${media.device.desktop}) {
      flex-basis: calc((100% - 3.2rem) / 3);
      margin-right: 1.6rem;
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  `
);
