import React from 'react';
import './Logo.css';

interface LogoProps {
  onAnimationComplete?: () => void;
}

const Logo: React.FC<LogoProps> = ({ onAnimationComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete?.();
    }, 2000); // Show logo for 2 seconds

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="logo-container">
      <div className="logo-background">
        <div className="logo-text">
          <span className="logo-x">X</span>
          <span className="logo-o">o</span>
          <span className="logo-academy">Academy</span>
        </div>
        <div className="logo-subtitle">Learning Excellence</div>
      </div>
    </div>
  );
};

export default Logo;
