import * as Styled from "./styles";
import { Logo } from "assets/images/logo/Logo";
import { HamburgerMenu } from "../common/HamburgerMenu";
export function Nav() {
  return (
    <Styled.Nav>
      <div id="wrapper">
        <Logo alt="logo image"/>
        <HamburgerMenu />
      </div>
    </Styled.Nav>
  );
}
