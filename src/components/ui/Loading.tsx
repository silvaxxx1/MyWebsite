import React from 'react';
import './Loading.css';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'spinner' | 'dots' | 'pulse';
  text?: string;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  variant = 'spinner',
  text,
  className = ''
}) => {
  const loadingClasses = [
    'loading',
    `loading--${size}`,
    `loading--${variant}`,
    className
  ].filter(Boolean).join(' ');

  const renderSpinner = () => (
    <div className="loading__spinner">
      <svg className="loading__spinner-icon" viewBox="0 0 24 24">
        <circle 
          className="loading__spinner-circle" 
          cx="12" 
          cy="12" 
          r="10" 
          fill="none" 
          strokeWidth="2"
        />
      </svg>
    </div>
  );

  const renderDots = () => (
    <div className="loading__dots">
      <div className="loading__dot"></div>
      <div className="loading__dot"></div>
      <div className="loading__dot"></div>
    </div>
  );

  const renderPulse = () => (
    <div className="loading__pulse">
      <div className="loading__pulse-circle"></div>
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={loadingClasses} role="status" aria-label="Loading">
      {renderVariant()}
      {text && <span className="loading__text">{text}</span>}
    </div>
  );
};

export default Loading;