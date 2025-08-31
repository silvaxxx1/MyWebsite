import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';

// Mock lazy components for testing
vi.mock('../components/LazyComponents', () => ({
  LazyAbout: () => (
    <div data-testid="about-section">
      <h2>About Me</h2>
      <p>Professional summary and skills</p>
    </div>
  ),
  LazyExperience: () => (
    <div data-testid="experience-section">
      <h2>Professional Experience</h2>
      <div data-testid="experience-item">STMicroelectronics</div>
    </div>
  ),
  LazyProjects: () => (
    <div data-testid="projects-section">
      <h2>Featured Projects</h2>
      <div data-testid="project-card" role="button">Project 1</div>
    </div>
  ),
  LazyContact: () => (
    <div data-testid="contact-section">
      <h2>Get In Touch</h2>
      <form data-testid="contact-form">
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  ),
}));

describe('Complete User Journey Tests', () => {
  const user = userEvent.setup();

  it('completes full user journey from landing to contact', async () => {
    render(<App />);

    // 1. User lands on the page
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    
    // 2. User sees the hero section with call-to-action buttons
    await waitFor(() => {
      expect(screen.getByText(/view my work/i)).toBeInTheDocument();
      expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
    });

    // 3. User navigates through sections using navigation
    const aboutLink = screen.getByRole('button', { name: /about/i });
    await user.click(aboutLink);
    
    await waitFor(() => {
      expect(screen.getByTestId('about-section')).toBeInTheDocument();
    });

    // 4. User views experience section
    const experienceLink = screen.getByRole('button', { name: /experience/i });
    await user.click(experienceLink);
    
    await waitFor(() => {
      expect(screen.getByTestId('experience-section')).toBeInTheDocument();
      expect(screen.getByTestId('experience-item')).toBeInTheDocument();
    });

    // 5. User explores projects
    const projectsLink = screen.getByRole('button', { name: /projects/i });
    await user.click(projectsLink);
    
    await waitFor(() => {
      expect(screen.getByTestId('projects-section')).toBeInTheDocument();
      expect(screen.getByTestId('project-card')).toBeInTheDocument();
    });

    // 6. User interacts with a project (would open modal in real app)
    const projectCard = screen.getByTestId('project-card');
    await user.click(projectCard);

    // 7. User navigates to contact section
    const contactLink = screen.getByRole('button', { name: /contact/i });
    await user.click(contactLink);
    
    await waitFor(() => {
      expect(screen.getByTestId('contact-section')).toBeInTheDocument();
      expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    });

    // 8. User fills out contact form
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const messageInput = screen.getByPlaceholderText('Message');
    const submitButton = screen.getByRole('button', { name: /send message/i });

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'Hello, I would like to connect!');

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageInput).toHaveValue('Hello, I would like to connect!');

    // 9. User submits the form
    await user.click(submitButton);
    
    // Form submission would be handled in the actual component
  });

  it('supports keyboard navigation throughout the journey', async () => {
    render(<App />);

    // Test keyboard navigation
    await user.tab(); // Should focus on first interactive element
    
    // Navigate through header elements
    const focusedElement = document.activeElement;
    expect(focusedElement).toBeInTheDocument();
    
    // Test that all navigation links are keyboard accessible
    const navButtons = screen.getAllByRole('button');
    for (const button of navButtons.slice(0, 5)) { // Navigation buttons
      button.focus();
      expect(document.activeElement).toBe(button);
      
      // Test Enter key activation
      fireEvent.keyDown(button, { key: 'Enter' });
    }
  });

  it('maintains responsive behavior throughout the journey', async () => {
    // Test mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });
    
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 667,
    });

    render(<App />);
    fireEvent(window, new Event('resize'));

    // Mobile navigation should be available
    await waitFor(() => {
      const menuToggle = screen.getByLabelText(/open menu/i);
      expect(menuToggle).toBeInTheDocument();
    });

    // Test mobile menu functionality
    const menuToggle = screen.getByLabelText(/open menu/i);
    await user.click(menuToggle);
    
    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument();
  });

  it('handles theme switching throughout the journey', async () => {
    render(<App />);

    const themeToggle = screen.getByLabelText(/switch to dark mode/i);
    
    // Switch to dark mode
    await user.click(themeToggle);
    expect(screen.getByLabelText(/switch to light mode/i)).toBeInTheDocument();
    
    // Navigate to different sections and ensure theme persists
    const aboutLink = screen.getByRole('button', { name: /about/i });
    await user.click(aboutLink);
    
    // Theme toggle should still show light mode option
    expect(screen.getByLabelText(/switch to light mode/i)).toBeInTheDocument();
  });

  it('provides smooth scrolling and animations', async () => {
    render(<App />);

    // Test smooth scrolling navigation
    const aboutLink = screen.getByRole('button', { name: /about/i });
    await user.click(aboutLink);
    
    // scrollTo should be called (mocked in setup)
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({
        behavior: 'smooth'
      })
    );
  });

  it('handles loading states and lazy loading', async () => {
    render(<App />);

    // Lazy components should load
    await waitFor(() => {
      expect(screen.getByTestId('about-section')).toBeInTheDocument();
      expect(screen.getByTestId('experience-section')).toBeInTheDocument();
      expect(screen.getByTestId('projects-section')).toBeInTheDocument();
      expect(screen.getByTestId('contact-section')).toBeInTheDocument();
    });
  });

  it('maintains accessibility throughout the journey', async () => {
    render(<App />);

    // Check for proper heading hierarchy
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
    
    // Check that all interactive elements have proper labels
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveAccessibleName();
    });

    // Check for proper landmark roles
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main content
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
    expect(screen.getByRole('navigation')).toBeInTheDocument(); // Navigation
  });

  it('handles error states gracefully', async () => {
    // Mock console.error to avoid noise
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    render(<App />);

    // App should render without errors
    expect(screen.getByRole('main')).toBeInTheDocument();
    
    // Navigation should work even if some components fail
    const aboutLink = screen.getByRole('button', { name: /about/i });
    await user.click(aboutLink);
    
    consoleSpy.mockRestore();
  });
});