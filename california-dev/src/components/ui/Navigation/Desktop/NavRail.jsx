import {
  Nav,
  NavLinksWrapper,
  NavLink,
  ThemeIconContainer,
} from "./NavRail.styles";
import { navItemsData } from "./utils/navConfig";
import { Logo } from "assets/images/logo";
import { ThemeIcon } from "assets/images/icons/navigation";
import { useNavRail } from "./hooks/useNavRail";

export const NavRail = () => {
  const {
    activeAnchor,
    pressedAnchor,
    navLinksRefs,
    handleMouseDown,
    handleMouseUp,
    handleNavLinkClick,
  } = useNavRail();
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
      <ThemeIconContainer>
        <ThemeIcon className="theme-icon" />
      </ThemeIconContainer>
    </Nav>
  );
};
