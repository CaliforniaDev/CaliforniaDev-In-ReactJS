import {useState, useEffect} from 'react';

export const useFadeInOnLoad = (delay = 500) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoaded;
}