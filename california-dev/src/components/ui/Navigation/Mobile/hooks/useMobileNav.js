import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavContext } from 'context/NavigationContext';

export const useMobileNav = (navbarHeight = 80) => {
  const { setIsMenuOpen, setActiveAnchor, setIsProgrammaticScroll } = useNavContext();
  const navigate = useNavigate();

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, [setIsMenuOpen]);

  const handleNavigation = useCallback(
    (event, id, route, sectionRef) => {
      setIsProgrammaticScroll(true);
      if (sectionRef.current) {
        event.preventDefault();
        handleMenuToggle();
        sectionRef.current.style.scrollMargin = `${navbarHeight}px`;
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        setActiveAnchor(id);
      }
      return navigate(route);
    },
    [
      setActiveAnchor,
      setIsProgrammaticScroll,
      handleMenuToggle,
      navbarHeight,
      navigate,
    ]
  );

  return {
    handleMenuToggle,
    handleNavigation,
  };
};
