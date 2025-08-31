import React from 'react';
import './Skeleton.css';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'rectangular' | 'circular';
  animation?: 'pulse' | 'wave' | 'none';
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant = 'text',
  animation = 'pulse',
  className = ''
}) => {
  const skeletonClasses = [
    'skeleton',
    `skeleton--${variant}`,
    `skeleton--${animation}`,
    className
  ].filter(Boolean).join(' ');

  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div 
      className={skeletonClasses}
      style={style}
      aria-label="Loading..."
      role="status"
    />
  );
};

// Skeleton Text Component for multiple lines
interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

export const SkeletonText: React.FC<SkeletonTextProps> = ({
  lines = 3,
  className = ''
}) => {
  return (
    <div className={`skeleton-text ${className}`}>
      {Array.from({ length: lines }, (_, index) => (
        <Skeleton
          key={index}
          variant="text"
          width={index === lines - 1 ? '60%' : '100%'}
          className="skeleton-text__line"
        />
      ))}
    </div>
  );
};

// Skeleton Card Component for project/experience cards
interface SkeletonCardProps {
  showImage?: boolean;
  className?: string;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  showImage = true,
  className = ''
}) => {
  return (
    <div className={`skeleton-card ${className}`}>
      {showImage && (
        <Skeleton
          variant="rectangular"
          height={200}
          className="skeleton-card__image"
        />
      )}
      <div className="skeleton-card__content">
        <Skeleton
          variant="text"
          width="80%"
          height={24}
          className="skeleton-card__title"
        />
        <SkeletonText lines={2} className="skeleton-card__description" />
        <div className="skeleton-card__tags">
          <Skeleton variant="rectangular" width={60} height={24} />
          <Skeleton variant="rectangular" width={80} height={24} />
          <Skeleton variant="rectangular" width={70} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;