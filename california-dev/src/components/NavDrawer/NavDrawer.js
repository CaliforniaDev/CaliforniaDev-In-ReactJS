import { useEffect, useState } from "react";
import * as Styled from "./styles";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export const NavDrawer = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) return setIsVisible(true);
      return setIsVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Styled.NavContainer id="NavDrawer" isVisible={isVisible}>
      <Logo />
      <NavLinks id="nav-links" />
    </Styled.NavContainer>
  );
};
