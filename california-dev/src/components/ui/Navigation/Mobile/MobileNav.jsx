import { motion } from 'framer-motion';

import { useMemo } from 'react';
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


export const MobileNav = ({ scrollYProgress, ...props }) => {
  const { toggleTheme } = useTheme();

  const { width, logoOpacity, isFab, isMenuOpen, handleMenuToggle } =
    useMobileNav(scrollYProgress);

  // Variants for the logo animation
  const logoVariants = {
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

  const themeButtonVariants = {
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

  const changeDisplayAttr = useMemo(() => {
    if (logoOpacity === 0 || isFab === true) return 'none';
    return 'block';
  }, [logoOpacity, isFab]);

  const isFabOrNav = useMemo(() => {
    if (isFab === true) return 'fab fixed';
    if (isFab === false) return 'top-nav fixed';
  }, [isFab]);
  return (
    <Nav
      $isFab={isFab}
      $isOpen={isMenuOpen}
      initial={false}
      animate={isMenuOpen ? 'open' : 'closed'}
      className={isFabOrNav}
      style={{ width }}
      layout
      {...props}
    >
      <motion.div
        variants={logoVariants}
        className="logo-wrapper"
        style={{
          display: changeDisplayAttr,
        }}
      >
        <span style={{ opacity: logoOpacity }} className="opacity-on-scroll">
          <Logo className="nav__logo nav-item" alt="logo image" />
        </span>
      </motion.div>

      <ThemeButton
        variants={themeButtonVariants}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        className="theme-btn"
        $isFab={isFab}
        onClick={toggleTheme}
      >
        <SunIcon className="theme-icon sun" size="24px" />

        <MoonIcon className="theme-icon moon" size="24px" />
        <StateLayer className="state-layer" />
      </ThemeButton>

      <TargetArea
        $isFab={isFab}
        className="target-area"
        onClick={handleMenuToggle}
      >
        <MenuToggle className="menu-toggle"></MenuToggle>
        <StateLayer className="state-layer" />
      </TargetArea>

      <NavMenu className="nav-menu" />
    </Nav>
  );
};

// <Nav
//   className="fixed fab"
//   variants={variants.slideInFromTop}
//   initial="hidden"
//   animate="visible"
// >

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// import { useTheme } from 'context/ThemeContext';
// import { useMobileNav } from './hooks/useMobileNav';
// import { useScrollInfo } from 'context/ScrollContext';

// //Assets
// import { Logo } from 'assets/images/logo/Logo';

// //Components
// import { StateLayer } from 'components/ui/StateLayer';
// import { MenuToggle } from './MenuToggle';
// import { NavMenu } from './NavMenu';

// //Styles and Utilities
// import { Nav } from './MobileNav.styles';
// import { motionVariants as variants } from 'components/ui/utils/motionVariants';

// /**
//  * Custom hook to get the position of the menu button on screen.
//  */
// const useMenuButtonPosition = () => {
//   const { scrollYProgress } = useScrollInfo();
//   const { navPosition, isFab } = useMobileNav(scrollYProgress);
//   const PADDING_RIGHT = 20;
//   const HALF_BUTTON_SIZE = 40 / 2;
//   const NAVBAR_HEIGHT = 80;

//   const [x, setX] = useState(
//     window.innerWidth - PADDING_RIGHT - HALF_BUTTON_SIZE
//   );
//   const [y, setY] = useState(NAVBAR_HEIGHT / 2 + navPosition);

//   useEffect(() => {
//     const updatePosition = () => {
//       setX(window.innerWidth - PADDING_RIGHT - HALF_BUTTON_SIZE);
//       setY(NAVBAR_HEIGHT / 2 + navPosition);
//       if (isFab) {
//         setX(window.innerWidth - PADDING_RIGHT - (HALF_BUTTON_SIZE + 16));
//         setY(NAVBAR_HEIGHT / 3 + navPosition);
//       }
//     };
//     window.addEventListener('resize', updatePosition);
//     updatePosition();
//     return () => {
//       window.removeEventListener('resize', updatePosition);
//     };
//   }, [navPosition, isFab]);
//   return [x, y];
// };

// /**
//  * Computes the radius of the circle needed to cover the full screen.
//  */
// const computeFullScreenCircleRadius = () => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   return Math.sqrt(width ** 2 + height ** 2);
// };

// export const MobileNav = ({ scrollYProgress, className, ...props }) => {
//   const [isOpen, setIstOpen] = useState(false);
//   const [x, y] = useMenuButtonPosition();
//   const { width, logoOpacity, navPosition, isFab } =
//     useMobileNav(scrollYProgress);

//   // Variants for the menu curtain animation
//   const menuCurtain = {
//     open: {
//       clipPath: `circle(${computeFullScreenCircleRadius()}px at ${x}px ${y}px)`,

//       opacity: 1,
//       transition: {
//         type: 'spring',
//         stiffness: 40,
//         restDelta: 2,
//       },
//     },
//     closed: {
//       clipPath: `circle(34px at ${x}px ${y}px)`,

//       transition: {
//         delay: 0.5,
//         type: 'spring',
//         stiffness: 400,
//         damping: 40,
//       },
//     },
//   };

//   const handleClick = () => {
//     setIstOpen(!isOpen);
//   };

//   return (
//     <Nav
//       className={`${className} ${isFab ? 'fab' : ''}`}
//       $isFab={isFab}
//       initial={false}
//       animate={isOpen ? 'open' : 'closed'}
//       style={{ width }}
//       $isOpen={isOpen}
//       $logoOpacity={logoOpacity}
//       $navPosition={navPosition}
//       layout
//       {...props}
//     >
//       <div id="wrapper">
//         <Logo className="nav__logo nav-item" alt="logo image" />
//         <MenuToggle
//           isOpen={isOpen}
//           toggle={() => handleClick()}
//           className="menu-toggle"
//         />
//       </div>
//       <motion.div
//         className="menu-background"
//         initial="closed"
//         animate={isOpen ? 'open' : 'closed'}
//         variants={menuCurtain}
//       >
//         <NavMenu className="nav-menu" />
//       </motion.div>
//     </Nav>
//   );
// };

// // <Nav
// //   className="fixed fab"
// //   variants={variants.slideInFromTop}
// //   initial="hidden"
// //   animate="visible"
// // >
