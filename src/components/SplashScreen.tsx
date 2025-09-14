import React, { useState } from 'react';
import Logo from './Logo';

interface SplashScreenProps {
  children: React.ReactNode;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  const handleAnimationComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <Logo onAnimationComplete={handleAnimationComplete} />}
      {!showSplash && children}
    </>
  );
};

export default SplashScreen;
