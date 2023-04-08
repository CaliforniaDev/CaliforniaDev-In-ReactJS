import * as Styled from "./styles";
import { Logo } from "assets/images/logo/Logo";
import { HamburgerMenu } from "../ui/HamburgerMenu";
export function Nav() {
  return (
    <Styled.Nav>
      <div id="wrapper">
        <Logo className="logo" alt="logo image"/>
        <HamburgerMenu />
      </div>
    </Styled.Nav>
  );
}
