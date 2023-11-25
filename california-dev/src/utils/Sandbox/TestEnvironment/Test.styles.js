import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled(motion.main)(({ theme: { palette, media } }) => {
  return css`
    overflow: hidden;
   
    @media (max-width: ${media.device.tablet}) {
    
    }
    @media (min-width: ${media.device.tablet}) {
      margin-left: var(--nav-rail-width);
    }
  `;
});
