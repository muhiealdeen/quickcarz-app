// app/hooks/useScreenSize.tsx
'use client';
import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Check the size on the initial render
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isSmallScreen;
};

export default useScreenSize;
