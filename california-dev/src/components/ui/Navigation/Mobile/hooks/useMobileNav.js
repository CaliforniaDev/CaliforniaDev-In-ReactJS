import { useNavigate } from 'react-router-dom';
import { useNavContext } from 'context/NavigationContext';

export const useMobileNav = () => {
  const { setIsMenuOpen,setActiveAnchor, setIsProgrammaticScroll } = useNavContext();
  const navigate = useNavigate();

  const handleMenuLinkClick = (event, id, route) => {
    setIsProgrammaticScroll(true);
    if (id) {
      const targetElement = document.querySelector(id);
      if (targetElement) {
        event.preventDefault();
        handleMenuToggle();
        setActiveAnchor(id);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    return navigate(route);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return {
    handleMenuToggle,
    handleMenuLinkClick,
  };
};
