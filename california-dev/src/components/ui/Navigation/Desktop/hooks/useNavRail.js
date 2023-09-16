import { useState, useEffect, useRef, useCallback } from 'react';

export const useNavRail = () => {
  const [activeAnchor, setActiveAnchor] = useState(null);
  const [pressedAnchor, setPressedAnchor] = useState(null);
  const navLinksRefs = useRef([]);

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
    (id, index) => {
      setActiveAnchor(id);
      navLinksRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    },
    [navLinksRefs]
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
