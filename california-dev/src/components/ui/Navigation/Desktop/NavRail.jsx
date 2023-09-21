import PropTypes from 'prop-types';

import { useEffect, useMemo } from 'react';
import { useTheme } from 'context/ThemeContext';

import { Nav, NavLinksWrapper, NavLink } from './NavRail.styles';
import { navItemsData } from './utils/navConfig';
import { Logo } from 'assets/images/logo';
import { useNavRail } from './hooks/useNavRail';
import { IconButton } from 'components/ui/IconButton';
import { SunIcon, MoonIcon } from 'assets/images/icons/navigation';

import { StateLayer } from 'components/ui/StateLayer';

export const NavRail = ({ showIcons = true, iconSet = 'main' }) => {
  const { toggleTheme } = useTheme();

  const {
    activeAnchor,
    pressedAnchor,
    navLinksRefs,
    handleMouseDown,
    handleMouseUp,
    handleNavLinkClick,
  } = useNavRail();

  const navItems = useMemo(() => {
    return [...navItemsData[iconSet]];
  }, [iconSet]);

  useEffect(() => {
    // Home is Active by default on page load
    const homeIndex = navItems.findIndex(({ id }) => id === 'home-section');
    if (homeIndex !== -1) {
      handleNavLinkClick('home-section', homeIndex);
    }
  }, [handleNavLinkClick, navItems]);

  return (
    <Nav>
      <Logo className="logo" />
      <NavLinksWrapper>
        {navItems.map(({ Icon, name, id }, index) => (
          <NavLink
            ref={el => (navLinksRefs.current[index] = el)}
            key={id}
            href={`#${id}`}
            isActive={activeAnchor === id}
            isPressed={pressedAnchor === id}
            onMouseDown={() => handleMouseDown(id)}
            onMouseUp={handleMouseUp}
            onClick={() => handleNavLinkClick(id, index)}
          >
            <StateLayer className="active-indicator" />
            <StateLayer className="state-layer" />
            {showIcons && (
              <Icon className="nav-icon" aria-hidden="true" alt={name} />
            )}
            <span className="visually-hidden">{name}</span>
          </NavLink>
        ))}
      </NavLinksWrapper>
      <IconButton
        className="theme-toggle-btn"
        variant="outlined"
        onClick={toggleTheme}
      >
        <MoonIcon className="theme-icon moon" />
        <SunIcon className="theme-icon sun" />
      </IconButton>
    </Nav>
  );
};

NavRail.propTypes = {
  showIcons: PropTypes.bool,
  iconSet: PropTypes.oneOf(['main', 'projectDetails']),
};
