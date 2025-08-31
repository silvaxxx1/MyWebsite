import { useEffect, useRef, useState } from 'react';

interface UseLazyLoadingOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useLazyLoading = (options: UseLazyLoadingOptions = {}) => {
  const { threshold = 0.1, rootMargin = '50px' } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasLoaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          setHasLoaded(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, hasLoaded]);

  return { elementRef, isIntersecting, hasLoaded };
};

// Hook for lazy loading images
export const useLazyImage = (src: string, options: UseLazyLoadingOptions = {}) => {
  const { elementRef, isIntersecting } = useLazyLoading(options);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isIntersecting && !imageLoaded) {
      setIsLoading(true);
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoading(false);
        setImageLoaded(true);
      };
      
      img.onerror = () => {
        setHasError(true);
        setIsLoading(false);
        setImageLoaded(true);
      };
      
      img.src = src;
    }
  }, [isIntersecting, imageLoaded, src]);

  return {
    elementRef,
    imageSrc,
    isLoading,
    hasError,
    shouldLoad: isIntersecting
  };
};

export default useLazyLoading;