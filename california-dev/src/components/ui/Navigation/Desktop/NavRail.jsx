import { Nav, NavLinksWrapper, NavLink } from "./NavRail.styles";
import { navItemsData } from "./utils/navConfig";
import { Logo } from "assets/images/logo";
import { useNavRail } from "./hooks/useNavRail";
import { IconButton } from "components/ui/IconButton";
import { SunIcon, MoonIcon } from "assets/images/icons/navigation";

import { useEffect } from "react";
import { useTheme } from "context/ThemeContext";

export const NavRail = () => {
  const { toggleTheme } = useTheme();
  const {
    activeAnchor,
    pressedAnchor,
    navLinksRefs,
    handleMouseDown,
    handleMouseUp,
    handleNavLinkClick,
  } = useNavRail();

  useEffect(() => {
    // Home is Active by default on page load
    const homeIndex = navItemsData.findIndex(({ id }) => id === "home-section");
    if (homeIndex !== -1) {
      handleNavLinkClick("home-section", homeIndex);
    }
  }, [handleNavLinkClick]);

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
      <IconButton
        className="themeToggle"
        variant="outlined"
        onClick={toggleTheme}
      >
        <MoonIcon className="theme-icon moon" />
        <SunIcon className="theme-icon sun" />
      </IconButton>
    </Nav>
  );
};
