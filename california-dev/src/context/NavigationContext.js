import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationContext = createContext();

export const useNavContext = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error(
      'useNavContext must be used within a NavigationProvider component'
    );
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [activeAnchor, setActiveAnchor] = useState();
  const [pressedAnchor, setPressedAnchor] = useState(null);
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const defaultRoute = '/#home-section';

  /**
   * Handles default route and scroll behavior on component mount or route change.
   */
  useEffect(() => {
    const { pathname, hash } = location;
    // Check if there is no hash in the URL if so, navigate to the default route
    if (pathname === '/' && !hash && defaultRoute) {
      return navigate(defaultRoute);
    }
    // Scroll to the target element if a hash is present
    if (hash && isProgrammaticScroll) {
      try {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (error) {
        console.error('Error scrolling to target element: ', error);
      }
    }
  }, [defaultRoute, navigate, location, isProgrammaticScroll]);

  /**
   * Updates the active anchor when location hash changes.
   */
  const handleActiveAnchorUpdate = () => {
    setActiveAnchor(location.hash);
  };
  useEffect(handleActiveAnchorUpdate, [location.hash]);

  const handleProgrammaticScroll = useCallback(() => {
    if (isProgrammaticScroll) {
      const timer = setTimeout(() => {
        // Reset after each link click
        setIsProgrammaticScroll(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isProgrammaticScroll]);
  useEffect(handleProgrammaticScroll, [handleProgrammaticScroll]);

  /**
   * Manages global mouse events to reset pressedAnchor state.
   * This effect cleans itself up by removing the event listener.
   */
  const handleGlobalMouseEvents = useCallback(() => {
    const handleGlobalMouseUp = () => {
      setPressedAnchor(null);
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);
  useEffect(handleGlobalMouseEvents, [handleGlobalMouseEvents]);

  const value = {
    activeAnchor,
    pressedAnchor,
    isMenuOpen,
    isProgrammaticScroll,
    setPressedAnchor,
    setActiveAnchor,
    setIsMenuOpen,
    setIsProgrammaticScroll,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );

  // return (
  //   <NavigationContext.Provider
  //     value={{
  //       activeAnchor,
  //       pressedAnchor,
  //       setPressedAnchor,
  //       setIsProgrammaticScroll,
  //     }}
  //   >
  //     {children}
  //   </NavigationContext.Provider>
  // );
  //};
};
