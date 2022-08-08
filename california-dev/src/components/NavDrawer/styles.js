import styled from "styled-components";


export const NavContainer = styled.nav`
  z-index: 100;
  position: fixed;
  display: flex;
  width: 100px;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.6rem 0;
  max-width: 100%;
  background-color: ${({theme}) =>theme.color.primary};
  box-shadow: 6px 0px 8px rgba(0, 0, 0, .3);
  transition: 0.2s;
  

`

export const NavLinks = styled.ul`
margin-bottom: auto;
margin-top: auto;
padding-bottom: 8rem;
list-style-type: none;
display:flex;
flex-direction: column;
text-align: center;
`