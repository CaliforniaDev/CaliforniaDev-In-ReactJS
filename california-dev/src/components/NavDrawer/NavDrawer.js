import * as Styled from './styles';
import Logo from './Logo';
import NavLinks from './NavLinks';

export const NavDrawer = () => {

  return (
    <Styled.NavContainer id="NavDrawer">
      <Logo />
      <NavLinks />
    </Styled.NavContainer>
  )
}


