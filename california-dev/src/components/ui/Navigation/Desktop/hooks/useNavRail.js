import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * useNavRail custom hook: Manages the state and behavior of the navigation rail.
 * Provides utilities to handle link clicking, mouse interactions, and anchor activation.
 * @returns {Object} A set of values and functions related to the navigation rail's state and behavior.
 */

export const useNavRail = () => {
  const navLinksRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeAnchor, setActiveAnchor] = useState(location.hash);
  const [pressedAnchor, setPressedAnchor] = useState(null);
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);
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
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
  }, [defaultRoute, navigate, location, isProgrammaticScroll]);

  /**
   * Updates the active anchor when location hash changes.
   */
  const handleActiveAnchorUpdate = () => {
    setActiveAnchor(location.hash);
  };
  useEffect(handleActiveAnchorUpdate, [location.hash]);

  /**
   * Resets programmatic scroll flag.
   * This effect cleans itself up by canceling the timer.
   */
  const handleProgrammaticScroll = () => {
    if (isProgrammaticScroll) {
      const timer = setTimeout(() => {
        // Reset after each link click
        setIsProgrammaticScroll(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  };
  useEffect(handleProgrammaticScroll, [isProgrammaticScroll]);

  /**
   * Manages global mouse events to reset pressedAnchor state.
   * This effect cleans itself up by removing the event listener.
   */
  const handleGlobalMouseEvents = () => {
    const handleGlobalMouseUp = () => {
      setPressedAnchor(null);
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  };
  useEffect(handleGlobalMouseEvents, []);

  const handleMouseDown = useCallback(id => {
    setPressedAnchor(id);
  }, []);

  const handleMouseUp = useCallback(() => {
    setPressedAnchor(null);
  }, []);

  /**
   * Handles link click events.
   * Manages smooth scrolling and route navigation based on the link target.
   * It also sets the programmatic scroll flag to true, indicating that the
   * next scroll operation is initiated programmatically and not by the user.
   *
   * @param {Event} event - The click event object.
   * @param {string} id - The ID of the target element.
   * @param {string} route - The route to navigate to if the target element is not present.
   */

  const handleNavLinkClick = useCallback(
    (event, id, route) => {
      setIsProgrammaticScroll(true);
      if (id) {
        const targetElement = document.querySelector(id);
        if (targetElement) {
          event.preventDefault();
          setActiveAnchor(id);
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return navigate(route);
    },
    [navigate]
  );
  return {
    activeAnchor,
    pressedAnchor,
    navLinksRefs,
    handleMouseDown,
    handleMouseUp,
    handleNavLinkClick,
    isProgrammaticScroll,
  };
};
