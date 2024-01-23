import { useEffect } from 'react';

export const useViewportHeight = () => {
  useEffect(() => {
    const updateAppHeight = () => {
      const appHeight = window.innerHeight + 'px';
      document.documentElement.style.setProperty('--app-height', appHeight);
    };

    window.addEventListener('resize', updateAppHeight);
    window.addEventListener('orientationchange', updateAppHeight);

    // Set the initial height
    updateAppHeight();

    return () => {
      window.removeEventListener('resize', updateAppHeight);
      window.removeEventListener('orientationchange', updateAppHeight);
    };
  }, []);
};

