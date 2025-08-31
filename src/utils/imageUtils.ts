// Image optimization utilities

export interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
}

// Generate responsive image srcSet
export const generateSrcSet = (baseSrc: string, sizes: number[]): string => {
  return sizes
    .map(size => `${baseSrc}?w=${size} ${size}w`)
    .join(', ');
};

// Generate sizes attribute for responsive images
export const generateSizes = (breakpoints: { [key: string]: string }): string => {
  return Object.entries(breakpoints)
    .map(([media, size]) => `${media} ${size}`)
    .join(', ');
};

// Check if WebP is supported
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = async (sources: string[]): Promise<void[]> => {
  return Promise.all(sources.map(preloadImage));
};

// Get optimized image URL (placeholder for actual image service)
export const getOptimizedImageUrl = (
  src: string, 
  options: ImageOptions = {}
): string => {
  const { width, height, quality = 80, format = 'webp' } = options;
  
  // In a real application, this would integrate with an image optimization service
  // like Cloudinary, ImageKit, or a custom solution
  const params = new URLSearchParams();
  
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  if (quality) params.append('q', quality.toString());
  if (format) params.append('f', format);
  
  return `${src}?${params.toString()}`;
};

// Generate placeholder image (low quality image placeholder)
export const generatePlaceholder = (width: number, height: number): string => {
  // Generate a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="system-ui" font-size="14">
        Loading...
      </text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Image error handling
export const handleImageError = (
  event: Event,
  fallbackSrc?: string
): void => {
  const img = event.target as HTMLImageElement;
  
  if (fallbackSrc && img.src !== fallbackSrc) {
    img.src = fallbackSrc;
  } else {
    // Replace with a default error image
    img.src = generatePlaceholder(300, 200);
    img.alt = 'Image failed to load';
  }
};

// Lazy loading intersection observer options
export const lazyLoadingOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '50px',
  threshold: 0.1
};

export default {
  generateSrcSet,
  generateSizes,
  supportsWebP,
  preloadImage,
  preloadImages,
  getOptimizedImageUrl,
  generatePlaceholder,
  handleImageError,
  lazyLoadingOptions
};