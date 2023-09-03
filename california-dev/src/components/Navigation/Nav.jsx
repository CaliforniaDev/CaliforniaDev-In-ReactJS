import * as Styled from './NavStyles';
import { Logo } from 'assets/images/logo/Logo';
import { MenuButton } from '../ui/MenuButton';
export function Nav() {
  return (
    <Styled.Nav>
      <div id="wrapper">
        <Logo className="logo" alt="logo image" />
        <MenuButton />
      </div>
    </Styled.Nav>
  );
}
