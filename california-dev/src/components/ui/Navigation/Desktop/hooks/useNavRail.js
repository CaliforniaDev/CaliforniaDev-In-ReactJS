import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavContext } from 'context/NavigationContext';

export const useNavRail = () => {
  const { setPressedAnchor, setActiveAnchor, setIsProgrammaticScroll } =
    useNavContext();
  const navigate = useNavigate();

  const handleMouseDown = useCallback(id => {
    setPressedAnchor(id);
  }, [setPressedAnchor]);

  const handleMouseUp = useCallback(() => {
    setPressedAnchor(null);
  }, [setPressedAnchor]);

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
    [navigate, setActiveAnchor, setIsProgrammaticScroll]
  );

  return {
    handleMouseDown,
    handleMouseUp,
    handleNavLinkClick,
  };
};
