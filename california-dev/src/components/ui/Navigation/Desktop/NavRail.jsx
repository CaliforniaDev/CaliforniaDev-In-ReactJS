import PropTypes from 'prop-types';

import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'context/ThemeContext';

import { Nav, NavLinksWrapper, NavLink } from './NavRail.styles';
import { navItemsData } from './utils/navConfig';
import { Logo } from 'assets/images/logo';
import { useNavRail } from './hooks/useNavRail';
import { IconButton } from 'components/ui/IconButton';
import { SunIcon, MoonIcon } from 'assets/images/icons/navigation';

import { StateLayer } from 'components/ui/StateLayer';

export const NavRail = ({
  iconSet,
  defaultActiveSection = 'home',
  ...props
}) => {
  // Using theme context to toggle theme
  const { toggleTheme } = useTheme();

  // Using custom hook to manage navigation rail states
  const {
    activeAnchor,
    pressedAnchor,
    navLinksRefs,
    handleMouseDown,
    handleMouseUp,
    handleNavLinkClick,
  } = useNavRail();

  // useMemo for optimization, to avoid unnecessary re-renders
  const navItems = useMemo(() => {
    return iconSet ? [...navItemsData[iconSet]] : [];
  }, [iconSet]);

  // useEffect to set the default active section on page load
  useEffect(() => {
    // Home is Active by default on page load
    const index = navItems.findIndex(({ id }) => id === defaultActiveSection);
    if (index === -1) return;
    handleNavLinkClick(defaultActiveSection, index);
  }, [handleNavLinkClick, navItems, defaultActiveSection]);

  return (
    <Nav className="nav" {...props}>
      
      <Link to="/">
        <Logo className="logo" />
      </Link>

      <NavLinksWrapper className="nav__links-wrapper">
        {navItems.map(({ Icon, name, id, route }, index) => (
          <NavLink
            ref={el => (navLinksRefs.current[index] = el)}
            key={id}
            href={`#${id}`}
            className="nav__link"
            isActive={activeAnchor === id}
            isPressed={pressedAnchor === id}
            onMouseDown={() => handleMouseDown(id)}
            onMouseUp={handleMouseUp}
            onClick={() => handleNavLinkClick(id, index, route)}
          >
            <StateLayer className="active-indicator" />
            <StateLayer className="state-layer" />
            <Icon className="nav-icon" aria-hidden="true" alt={name} />
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

// TODO: Update PropTypes to reflect the latest changes in your props
NavRail.propTypes = {
  iconSet: PropTypes.oneOf(['main', 'projectDetails']),
};
