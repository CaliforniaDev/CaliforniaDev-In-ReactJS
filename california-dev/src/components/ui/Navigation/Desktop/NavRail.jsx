import { useState, useEffect, useRef, useCallback } from "react";
import { Nav, NavLinksWrapper, NavLink } from "./NavRail.styles";
import { navItemsData } from "./utils/navConfig";
import { Logo } from "assets/images/logo";

export const NavRail = () => {
  const [activeAnchor, setActiveAnchor] = useState(null);
  const [pressedAnchor, setPressedAnchor] = useState(null);
  const navLinksRefs = useRef([]);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setPressedAnchor(null);
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  const handleMouseDown = useCallback((id) => {
    setPressedAnchor(id);
  }, []);

  const handleMouseUp = useCallback(() => {
    setPressedAnchor(null);
  }, []);

  const handleNavLinkClick = useCallback((id, index) => {
    setActiveAnchor(id);
    navLinksRefs.current[index].scrollIntoView({ behavior: "smooth" });
  }, [navLinksRefs]);

  return (
    <Nav>
      <Logo className="logo" />
      <NavLinksWrapper>
        {navItemsData.map(({ Icon, name, id }, index) => (
          <NavLink
            ref={(el) => (navLinksRefs.current[index] = el)}
            key={id}
            href={`#${id}`}
            isActive={activeAnchor === id}
            isPressed={pressedAnchor === id}
            onMouseDown={() => handleMouseDown(id)}
            onMouseUp={handleMouseUp}
            onClick={() => handleNavLinkClick(id, index)}
          >
            <Icon className="nav-icon" aria-hidden="true" alt={name} />
            <span className="visually-hidden">{name}</span>
          </NavLink>
        ))}
      </NavLinksWrapper>
    </Nav>
  );
};
