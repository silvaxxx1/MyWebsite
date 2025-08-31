import React, { useState } from 'react';
import Skeleton from './Skeleton';
import { useLazyImage } from '../../hooks/useLazyLoading';
import './Image.css';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  showSkeleton?: boolean;
  aspectRatio?: string;
  className?: string;
  lazy?: boolean;
  webpSrc?: string;
  sizes?: string;
  srcSet?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fallbackSrc = `${import.meta.env.BASE_URL}images/placeholder-project.svg`,
  showSkeleton = true,
  aspectRatio,
  className = '',
  lazy = true,
  webpSrc,
  sizes,
  srcSet,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  
  const {
    elementRef,
    imageSrc,
    isLoading: lazyLoading,
    hasError: lazyError,
    shouldLoad
  } = useLazyImage(src, { rootMargin: '100px' });

  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Simplified loading logic
  const finalSrc = lazy ? imageSrc : src;
  const displaySrc = currentSrc || finalSrc;
  const isLoading = lazy ? (lazyLoading || (!imageLoaded && !!imageSrc)) : !imageLoaded;
  const imageError = lazy ? lazyError : hasError;

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setImageLoaded(false); // Reset to try loading fallback
    } else {
      setHasError(true);
      setImageLoaded(true);
    }
  };

  const imageClasses = [
    'image',
    isLoading && 'image--loading',
    imageError && 'image--error',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      ref={elementRef}
      className="image-container"
      style={{ aspectRatio }}
    >
      {isLoading && showSkeleton && (
        <Skeleton 
          variant="rectangular" 
          className="image-skeleton"
          animation="wave"
        />
      )}
      
      {!imageError && (shouldLoad || !lazy) && (
        <>
          {webpSrc && (
            <picture>
              <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
              <source srcSet={srcSet || displaySrc} type="image/jpeg" sizes={sizes} />
              <img
                src={displaySrc}
                alt={alt}
                className={imageClasses}
                onLoad={handleLoad}
                onError={handleError}
                loading={lazy ? 'lazy' : 'eager'}
                style={{ 
                  opacity: isLoading ? 0 : 1,
                  transition: 'opacity 0.3s ease'
                }}
                {...props}
              />
            </picture>
          )}
          
          {!webpSrc && (
            <img
              src={displaySrc}
              alt={alt}
              className={imageClasses}
              onLoad={handleLoad}
              onError={handleError}
              loading={lazy ? 'lazy' : 'eager'}
              srcSet={srcSet}
              sizes={sizes}
              style={{ 
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 0.3s ease'
              }}
              {...props}
            />
          )}
        </>
      )}
      
      {imageError && (
        <div className="image-error">
          <svg 
            className="image-error-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21,15 16,10 5,21"/>
          </svg>
          <span className="image-error-text">Image not available</span>
        </div>
      )}
    </div>
  );
};

export default Image;