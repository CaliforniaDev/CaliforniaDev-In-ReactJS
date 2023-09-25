import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavRail = () => {
  const [activeAnchor, setActiveAnchor] = useState(null);
  const [pressedAnchor, setPressedAnchor] = useState(null);
  const navLinksRefs = useRef([]);
  const navigate = useNavigate();

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

  const handleNavLinkClick = useCallback(
    (id, index, route) => {
      if (route) navigate(route);
      setActiveAnchor(id);
      navLinksRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    },
    [navLinksRefs, navigate]
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
