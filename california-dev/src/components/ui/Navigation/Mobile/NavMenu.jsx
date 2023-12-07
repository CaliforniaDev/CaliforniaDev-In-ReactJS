import { motion } from 'framer-motion';
import { navItemsData } from '../utils/navConfig';

import { useMobileNav } from './hooks/useMobileNav';

const variants = {
  menu: {
    open: {
      opacity: 1,
      display: 'flex',
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.5 },
      transitionEnd: {
        display: 'none',
      },
    },
  },
  items: {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,

      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
};

const MenuItems = (navItemSet) => {
  const navItems = navItemsData[navItemSet] || [];

  const { handleMenuLinkClick } = useMobileNav();

  return navItems.map(({ name, id, route }) => {
    return (
      <motion.li
        variants={variants.items}
        key={id}
        whileHover={{ scale: 1.1, marginLeft: '20px' }}
        whileTap={{ scale: 0.95, marginLeft: '0px' }}
      >
        <a
          href={route}
          className="nav-link"
          onClick={event => handleMenuLinkClick(event, id, route)}
        >
          {name}
        </a>
      </motion.li>
    );
  });
};

export const NavMenu = ({ className, navItemSet }) => {
  return (
    <motion.ul className={className} variants={variants.menu}>
      {MenuItems(navItemSet)}
    </motion.ul>
  );
};
