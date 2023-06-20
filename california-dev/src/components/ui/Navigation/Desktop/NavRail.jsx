import { useState, useEffect } from "react";
import { Nav, NavList, NavItem } from "./NavRail.styles";
import { navItems } from "./utils/navConfig";

export const NavRail = () => {
  const [activeAnchor, setActiveAnchor] = useState(null);
  const [pressedAnchor, setPressedAnchor] = useState(null);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setPressedAnchor(null);
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  function handleMouseDown(name) {
    setPressedAnchor(name);
  }

  function handleMouseUp() {
    setPressedAnchor(null);
  }

  return (
    <Nav>
      <NavList>
        {navItems.map(({ Icon, name }) => (
          <NavItem
            tabIndex="0"
            isActive={activeAnchor === name}
            isPressed={pressedAnchor === name}
            onMouseDown={() => handleMouseDown(name)}
            onMouseUp={handleMouseUp}
            onClick={() => setActiveAnchor(name)}
            key={name}
          >
            <Icon className="nav-icon" aria-hidden="true" />
            <span className="visually-hidden">{name}</span>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};
