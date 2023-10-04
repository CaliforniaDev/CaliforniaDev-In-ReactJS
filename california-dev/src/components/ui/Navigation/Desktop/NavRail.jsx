import PropTypes from 'prop-types';
import { useEffect, useMemo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useTheme } from 'context/ThemeContext';

import { Nav, NavLinksWrapper, NavLink } from './NavRail.styles';
import { navItemsData } from './utils/navConfig';
import { Logo } from 'assets/images/logo';
import { useNavRail } from './hooks/useNavRail';
import { IconButton } from 'components/ui/IconButton';
import { SunIcon, MoonIcon } from 'assets/images/icons/navigation';

import { StateLayer } from 'components/ui/StateLayer';

/**
 * NavRail component: Represents the navigation bar with interactive links and theme toggling functionality.
 * @param {string} iconSet - Defines which set of icons to use (e.g., main or projectDetails)
 * @param {string} defaultRoute - The default route to navigate to when the page initially loads
 * @param {Object} props - Additional props to pass to the Nav component
 * @returns {JSX.Element} The rendered NavRail component
 */

export const NavRail = ({
  iconSet,
  defaultRoute = '#home-section',
  ...props
}) => {
  // Hooks
  const { toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    activeAnchor,
    pressedAnchor,
    navLinksRefs,
    handleMouseDown,
    handleMouseUp,
    handleNavLinkClick,
  } = useNavRail();

  // Get the list of navigation items based on the provided icon set
  const navItems = useMemo(() => {
    return iconSet ? [...navItemsData[iconSet]] : [];
  }, [iconSet]);

  // Ensure the default section is active when the page initially loads
  useEffect(() => {
    const { pathname, hash } = location;
    if (pathname === '/' && !hash) navigate(defaultRoute);
    return;
  }, [defaultRoute, navigate, location]);

  return (
    <Nav className="nav" {...props}>
      <Link to="/">
        <Logo className="logo" />
      </Link>

      <NavLinksWrapper className="nav__links-wrapper">
        {navItems.map(function ({ Icon, name, id, route }, index) {
          return (
            <NavLink
              ref={el => (navLinksRefs.current[index] = el)}
              key={id}
              href={`${route}`}
              className="nav__link"
              isActive={activeAnchor === id}
              isPressed={pressedAnchor === id}
              onMouseDown={() => handleMouseDown(id)}
              onMouseUp={handleMouseUp}
              onClick={event => handleNavLinkClick(event, id, route, index)}
            >
              <StateLayer className="active-indicator" />
              <StateLayer className="state-layer" />
              <Icon className="nav-icon" aria-hidden="true" alt={name} />
              <span className="visually-hidden">{name}</span>
            </NavLink>
          );
        })}
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
