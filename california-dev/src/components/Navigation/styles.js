import styled, {withTheme} from "styled-components"


export const Nav = styled.nav`
  display: flex;
  height: 56px;
  background: ${({theme: {elevation}}) => elevation.level1.surfaceColor};
  box-shadow: ${({theme: {elevation}}) => elevation.level1.shadow};

`
