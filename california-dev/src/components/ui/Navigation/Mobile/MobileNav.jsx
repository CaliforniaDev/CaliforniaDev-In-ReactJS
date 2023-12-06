import { useEffect } from 'react';
import { useNavContext } from 'context/NavigationContext';
import { motion } from 'framer-motion';
import { useTheme } from 'context/ThemeContext';
import { useMobileNav } from './hooks/useMobileNav';
import { useNavMotionEvents } from './hooks/useNavMotionEvents';

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

export const MobileNav = () => {
  const { toggleTheme } = useTheme();
  const { isMenuOpen } = useNavContext();
  const { handleMenuToggle } = useMobileNav();
  const { width, logoOpacity, isFab } = useNavMotionEvents();

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



  // Determine the display style for the logo <span> wrapper
  const displayStyle = logoOpacity === 0 || isFab ? 'none' : 'block';

  // Determine the class for the nav based on isFab
  const navClass = isFab ? 'fab fixed mobile-nav' : 'top-nav fixed mobile-nav';
  return (
    <Nav
      $isFab={isFab}
      initial={false}
      animate={isMenuOpen ? 'open' : 'closed'}
      className={navClass}
      style={{ width }}
      layout
    >
      <motion.div
        variants={logoAnimationVariants}
        className="logo-wrapper"
        style={{
          display: displayStyle,
        }}
      >
        <span style={{ opacity: logoOpacity }} className="opacity-on-scroll">
          <Logo idSuffix="mobile" className="nav__logo nav-item" alt="logo image" />
        </span>
      </motion.div>

      <ThemeButton
        variants={themeButtonAnimationVariants}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        className="theme-btn"
        onClick={toggleTheme}
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
        <StateLayer className="state-layer" />
      </TargetArea>

      <NavMenu className="nav-menu" />
    </Nav>
  );
};
