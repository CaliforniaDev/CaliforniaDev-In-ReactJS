import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useTheme } from 'context/ThemeContext';

import { Nav, NavLinksWrapper, NavLink } from './NavRail.styles';
import { navItemsData } from './utils/navConfig';
import { Logo } from 'assets/images/logo';
import { useNavRail } from './hooks/useNavRail';
import { IconButton } from 'components/ui/IconButton';
import { SunIcon, MoonIcon } from 'assets/images/icons/navigation';

import { StateLayer } from 'components/ui/StateLayer';

import { useNavContext } from 'context/NavigationContext';

/**
 * NavRail component.
 *
 * Represents the navigation bar with interactive links and theme toggling functionality.
 *
 * @param {string} iconSet - Defines which set of icons to use (e.g., 'main' or 'projectDetails').
 * @param {string} defaultRoute - The default route to navigate to when the page initially loads.
 * @param {string} isInView - Flag indicating the current section in view.
 * @param {Object} props - Additional props to pass to the Nav component.
 * @returns {JSX.Element} The rendered NavRail component.
 */

export const NavRail = ({
  iconSet,
  defaultRoute = '#home-section',
  isInView,
  ...props
}) => {
  // Hooks
  const { toggleTheme } = useTheme(); // Manages theme states.
  const navigate = useNavigate(); // Navigational utility.
  // const {
  //   activeAnchor,//
  //   pressedAnchor,//
  //   navLinksRefs,
  //   handleMouseDown,//
  //   handleMouseUp,//
  //   handleNavLinkClick,//
  //   isProgrammaticScroll,//
  // } = useNavRail(); // Custom hook to manage NavRail state and behaviors.

  const { activeAnchor, pressedAnchor, isProgrammaticScroll } = useNavContext();

  const { handleMouseDown, handleMouseUp, handleNavLinkClick } = useNavRail();

  // Get the list of navigation items based on the provided icon set
  const navItems = navItemsData[iconSet] || [];

  /**
   * Updates the router based on user scrolling behavior.
   */
  const updateRouterOnUserScroll = () => {
    if (isInView && !isProgrammaticScroll) {
      const hashRoute = `/${isInView}`;
      navigate(hashRoute);
    }
  };
  useEffect(updateRouterOnUserScroll, [
    isInView,
    isProgrammaticScroll,
    navigate,
  ]);

  return (
    <Nav className="nav" {...props}>
      <Link to="/">
        <Logo className="logo" />
      </Link>

      <NavLinksWrapper className="nav__links-wrapper">
        {navItems.map(({ Icon, name, id, route }, index) => {
          return (
            <NavLink
              key={id}
              href={`${route}`}
              className="nav__link"
              $isActive={activeAnchor === id}
              $isPressed={pressedAnchor === id}
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

NavRail.propTypes = {
  iconSet: PropTypes.oneOf(['main', 'projectDetails']),
  defaultRoute: PropTypes.string,
  isInView: PropTypes.string,
};
