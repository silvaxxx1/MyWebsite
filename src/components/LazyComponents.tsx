import { lazy } from 'react';

// Lazy load non-critical components for better performance
export const LazyAbout = lazy(() => import('./sections/About'));
export const LazyExperience = lazy(() => import('./sections/Experience'));
export const LazyProjects = lazy(() => import('./sections/Projects'));
export const LazySkills = lazy(() => import('./sections/Skills'));
export const LazyContact = lazy(() => import('./sections/Contact'));

// Lazy load UI components that might not be immediately needed
export const LazyModal = lazy(() => import('./ui/Modal'));
export const LazyProjectDetail = lazy(() => import('./ui/ProjectDetail'));