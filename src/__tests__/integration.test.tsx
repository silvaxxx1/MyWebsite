import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';

// Mock lazy components to avoid Suspense issues in tests
vi.mock('../components/LazyComponents', () => ({
  LazyAbout: () => <div data-testid="about-section">About Section</div>,
  LazyExperience: () => <div data-testid="experience-section">Experience Section</div>,
  LazyProjects: () => <div data-testid="projects-section">Projects Section</div>,
  LazyContact: () => <div data-testid="contact-section">Contact Section</div>,
}));

describe('Portfolio Integration Tests', () => {
  it('renders all main sections', async () => {
    render(<App />);
    
    // Check that all main sections are present
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main content
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
    
    // Wait for lazy components to load
    await waitFor(() => {
      expect(screen.getByTestId('about-section')).toBeInTheDocument();
      expect(screen.getByTestId('experience-section')).toBeInTheDocument();
      expect(screen.getByTestId('projects-section')).toBeInTheDocument();
      expect(screen.getByTestId('contact-section')).toBeInTheDocument();
    });
  });

  it('has proper navigation structure', () => {
    render(<App />);
    
    // Check navigation elements
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    
    // Check navigation links
    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /contact/i })).toBeInTheDocument();
  });

  it('supports theme switching', () => {
    render(<App />);
    
    const themeToggle = screen.getByLabelText(/switch to dark mode/i);
    expect(themeToggle).toBeInTheDocument();
    
    // Test theme toggle
    fireEvent.click(themeToggle);
    expect(screen.getByLabelText(/switch to light mode/i)).toBeInTheDocument();
  });

  it('handles navigation clicks', () => {
    render(<App />);
    
    const aboutLink = screen.getByRole('button', { name: /about/i });
    fireEvent.click(aboutLink);
    
    // Should call scrollToSection (mocked in setup)
    expect(window.scrollTo).toHaveBeenCalled();
  });

  it('is responsive and handles window resize', () => {
    render(<App />);
    
    // Simulate mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500,
    });
    
    fireEvent(window, new Event('resize'));
    
    // Mobile menu should be available
    const menuToggle = screen.getByLabelText(/open menu/i);
    expect(menuToggle).toBeInTheDocument();
  });

  it('maintains accessibility standards', () => {
    render(<App />);
    
    // Check for proper heading hierarchy
    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toBeInTheDocument();
    
    // Check for skip links or proper focus management
    const focusableElements = screen.getAllByRole('button');
    expect(focusableElements.length).toBeGreaterThan(0);
    
    // All buttons should be accessible
    focusableElements.forEach(element => {
      expect(element).not.toHaveAttribute('tabindex', '-1');
    });
  });

  it('loads performance monitoring in development', () => {
    // Mock development environment
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    
    render(<App />);
    
    // Performance monitor should be present in development
    // (This would be visible as a fixed positioned element)
    
    process.env.NODE_ENV = originalEnv;
  });

  it('handles errors gracefully', () => {
    // Mock console.error to avoid noise in tests
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    render(<App />);
    
    // App should render without throwing errors
    expect(screen.getByRole('main')).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });
});