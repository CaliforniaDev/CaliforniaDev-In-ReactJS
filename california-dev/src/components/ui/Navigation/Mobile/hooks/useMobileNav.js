import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavContext } from 'context/NavigationContext';

export const useMobileNav = (navbarHeight = 80) => {
  const { setIsMenuOpen, setActiveAnchor, setIsProgrammaticScroll } =
    useNavContext();
  const navigate = useNavigate();
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, [setIsMenuOpen]);

  const handleNavigation = useCallback(
    (event, id, route) => {
      setIsProgrammaticScroll(true);
      if (id) {
        const targetElement = document.querySelector(id);
        if (targetElement) {
          event.preventDefault();
          handleMenuToggle();
          setActiveAnchor(id);
          targetElement.style.scrollMargin = `${navbarHeight}px`;
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
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
