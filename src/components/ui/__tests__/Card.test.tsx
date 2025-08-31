import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Card from '../Card';

describe('Card', () => {
  it('renders with default props', () => {
    render(<Card>Card content</Card>);
    const card = screen.getByText('Card content');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('card', 'card--default', 'card--padding-medium');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Card variant="elevated">Elevated</Card>);
    expect(screen.getByText('Elevated')).toHaveClass('card--elevated');

    rerender(<Card variant="outlined">Outlined</Card>);
    expect(screen.getByText('Outlined')).toHaveClass('card--outlined');

    rerender(<Card variant="ghost">Ghost</Card>);
    expect(screen.getByText('Ghost')).toHaveClass('card--ghost');
  });

  it('renders with different padding options', () => {
    const { rerender } = render(<Card padding="none">No padding</Card>);
    expect(screen.getByText('No padding')).toHaveClass('card--padding-none');

    rerender(<Card padding="small">Small padding</Card>);
    expect(screen.getByText('Small padding')).toHaveClass('card--padding-small');

    rerender(<Card padding="large">Large padding</Card>);
    expect(screen.getByText('Large padding')).toHaveClass('card--padding-large');
  });

  it('applies hover class when hover prop is true', () => {
    render(<Card hover>Hoverable card</Card>);
    expect(screen.getByText('Hoverable card')).toHaveClass('card--hover');
  });

  it('renders as button when clickable', () => {
    const handleClick = vi.fn();
    render(
      <Card clickable onClick={handleClick}>
        Clickable card
      </Card>
    );
    
    const card = screen.getByRole('button');
    expect(card).toHaveClass('card--clickable');
    
    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard events when clickable', () => {
    const handleClick = vi.fn();
    render(
      <Card clickable onClick={handleClick}>
        Clickable card
      </Card>
    );
    
    const card = screen.getByRole('button');
    
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    fireEvent.keyDown(card, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('applies custom className', () => {
    render(<Card className="custom-card">Custom card</Card>);
    expect(screen.getByText('Custom card')).toHaveClass('custom-card');
  });

  it('renders as div when not clickable', () => {
    render(<Card>Regular card</Card>);
    const card = screen.getByText('Regular card');
    expect(card.tagName).toBe('DIV');
  });
});