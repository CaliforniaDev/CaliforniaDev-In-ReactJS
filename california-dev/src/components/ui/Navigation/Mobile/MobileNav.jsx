import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link, useNavigate } from 'react-router-dom';
import { useNavContext } from 'context/NavigationContext';
import { motion } from 'framer-motion';
import { useTheme } from 'context/ThemeContext';
import { useMobileNav } from './hooks/useMobileNav';

//Assets
import { Logo } from 'assets/images/logo/Logo';

//Components
import { StateLayer } from 'components/ui/StateLayer';
import { MenuToggle } from './MenuToggle';
import { NavMenu } from './NavMenu';

//Styles and Utilities
import { Nav, ThemeButton, TargetArea } from './MobileNav.styles';
import { MoonIcon, SunIcon } from 'assets/images/icons/navigation';

// Variants for the logo animation
const logoAnimationVariants = {
  open: {
    x: -24,
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
    },
  },
  closed: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.5,
    },
  },
};

const themeButtonAnimationVariants = {
  open: {
    opacity: 1,
    display: 'flex',
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
  closed: {
    opacity: 0,
    y: 40,
    transition: {
      delay: 0.5,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

export const MobileNav = ({ navItemSet, isInView }) => {
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();
  const { isMenuOpen, isProgrammaticScroll } = useNavContext();
  const { handleNavigation } = useMobileNav();
  const { handleMenuToggle } = useMobileNav();

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

  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleThemeButtonClick = () => {
    toggleTheme();
    handleMenuToggle();
  };

  return (
    <Nav
      initial={false}
      animate={isMenuOpen ? 'open' : 'closed'}
      className="mobile-nav fixed"
    >
      <motion.div variants={logoAnimationVariants} className="logo-wrapper">
        <Link
          to= '/'
          onClick={event => handleNavigation(event)}
        >
          <Logo
            idSuffix="mobile"
            className="nav__logo nav-item"
            alt="logo image"
          />
        </Link>
      </motion.div>

      <ThemeButton
        variants={themeButtonAnimationVariants}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        className="theme-btn"
        onClick={handleThemeButtonClick}
      >
        <SunIcon className="theme-icon sun" size="24px" />

        <MoonIcon className="theme-icon moon" size="24px" />
        <StateLayer className="state-layer" />
      </ThemeButton>

      <TargetArea
        role="button"
        aria-label="Open Nav Menu"
        className="target-area"
        onClick={handleMenuToggle}
      >
        <MenuToggle className="menu-toggle" />
      </TargetArea>

      <NavMenu className="nav-menu" navItemSet={navItemSet} />
    </Nav>
  );
};

MobileNav.propTypes = {
  navItemSet: PropTypes.oneOf(['main', 'projectDetails']),
  isInView: PropTypes.oneOf([
    '#home-section',
    '#workflow-section',
    '#projects-section',
    '#skills-section',
    '#contact-me-section',
  ]),
};
