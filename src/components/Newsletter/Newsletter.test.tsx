import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Newsletter from './Newsletter';

describe('Newsletter Component', () => {
  it('renders without crashing', () => {
    render(<Newsletter />);
    const newsletterElement = screen.getByText('Subscribe To Our Newsletter');
    expect(newsletterElement).toBeInTheDocument();
  });

  it('displays the subheading, title, and description correctly', () => {
    render(<Newsletter />);
    expect(screen.getByText('Newsletter')).toBeInTheDocument();
    expect(screen.getByText('Subscribe To Our Newsletter')).toBeInTheDocument();
    expect(
      screen.getByText('And never miss latest Updates!'),
    ).toBeInTheDocument();
  });

  it('renders the email input field', () => {
    render(<Newsletter />);
    const emailInput = screen.getByPlaceholderText('Enter your email address');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('displays the "Subscribe" button', () => {
    render(<Newsletter />);
    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });
    expect(subscribeButton).toBeInTheDocument();
  });
});
