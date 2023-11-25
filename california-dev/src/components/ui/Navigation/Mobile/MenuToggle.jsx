import { motion } from 'framer-motion';
import * as Styled from './MobileNav.styles';

/**
 * Component to render individual path elements.
 */
const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

/**
 * MenuToggle component to handle the mobile menu toggle button.
 *
 * @param {Function} toggle - Function to toggle the mobile menu open/closed.
 * @param {string} className - Additional CSS classes for the button.
 * @param {number} size - The dimensions of the toggle button. Defaults to 40.
 */

export const MenuToggle = ({ toggle, className, size = 40 }) => (
  <Styled.MenuToggle className={className}>
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* <rect width={SIZE} height={SIZE} stroke="cyan" fill="transparent" /> */}

      {/* Variants for the top horizontal line */}
      <Path
        variants={{
          closed: { d: 'M 5.5 9.5 L 34.5 9.5' },
          open: { d: 'M 9.5 30.5 L 30.5 9.5' },
        }}
      />
      {/* Variants for the middle horizontal line */}
      <Path
        d="M 13.5 20 L 34.5 20"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
      />
      {/* Variants for the bottom horizontal line */}
      <Path
        variants={{
          closed: { d: 'M 5.5 30.5 L 34.5 30.5' },
          open: { d: 'M 9.5 9.5 L 30.5 30.5' },
        }}
      />
    </svg>
  </Styled.MenuToggle>
);
