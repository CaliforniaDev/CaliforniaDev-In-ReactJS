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

  // Update the active anchor when the location hash changes and on load
  useEffect(() => {
    setActiveAnchor(location.hash);
  }, [location.hash]);

  // Add an event listener to track when the mouse button is released
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setPressedAnchor(null);
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  const handleMouseDown = useCallback(id => {
    setPressedAnchor(id);
  }, []);

  const handleMouseUp = useCallback(() => {
    setPressedAnchor(null);
  }, []);

  /**
   * Handles the logic for clicking a navigation link.
   * - Prevents the default link behavior if the target element is present on the current page.
   * - Scrolls smoothly to the target element if present.
   * - Navigates to the provided route otherwise.
   * @param {Event} event - The click event object
   * @param {string} id - The ID of the target element
   * @param {string} route - The route to navigate to if the target element is not present
   */
  
  const handleNavLinkClick = useCallback(
    (event, id, route) => {
      const targetElement = document.querySelector(id);
      if (targetElement) {
        event.preventDefault();
        setActiveAnchor(id);
        targetElement.scrollIntoView({ behavior: 'smooth' });
        return;
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
  };
};
