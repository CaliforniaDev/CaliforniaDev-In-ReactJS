import styled, { css } from 'styled-components';

const afterPseudoElementStyling = css`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    opacity: 0;
    pointer-events: none;

    transition:
      background-color 0.3s ease,
      opacity 0.3s ease;
  }
`;

export const InputField = styled.div(({ theme: { palette } }) => {
  return css`
    position: relative;
    display: block;
    width: 100%;
    
    ${afterPseudoElementStyling}
    &:hover::after {
      background-color: ${palette.onSurface};
      opacity: 0.08;
    }
  `;
});

export const Input = styled.input(
  ({ theme: { palette, typography }, isFocused, multiline }) => css`
    width: 100%;
    position: relative;
    height: ${multiline ? '168px' : '56px'};
    padding: 2.4rem 1.6rem 0.8rem 1.6rem;

    border: none;
    /** During Focus State border style changes */
    border-bottom: ${isFocused ? '2px' : '1px'} solid ${palette.onSurfaceVariant}; 
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    
    background-color: ${palette.surfaceContainerHighest};
    color: ${palette.onSurface};
    caret-color: ${palette.primary};

    transition:
      background-color 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out,
      border 0.3s ease-in-out;


    ${typography.body.large}

    &:focus {
      outline: none;
      border-color: ${palette.primary};
    }
  `
);

export const Label = styled.label(
  ({ theme: { palette, typography }, isFocused, isPopulated }) => {
    return css`
      position: absolute;
      z-index: 1;
      left: 16px;
      right: 16px;
      text-align: left;
      padding-top: ${isFocused || isPopulated ? '8px' : '16px'};
      font-size: ${isFocused || isPopulated
        ? typography.body.small
        : typography.body.large};
      color: ${isFocused ? palette.primary : palette.onSurfaceVariant};
      transition: all 0.3s ease-in-out;
      pointer-events: none;
    `;
  }
);
