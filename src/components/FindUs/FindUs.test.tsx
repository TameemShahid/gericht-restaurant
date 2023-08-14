import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FindUs from './FindUs';

describe('<FindUs />', () => {
  it('renders without crashing', () => {
    render(<FindUs />);
    expect(screen.getByTestId('contact')).toBeInTheDocument();
  });

  it('displays the subheading, title, address, and opening hours correctly', () => {
    render(<FindUs />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Find Us')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Opening Hours')).toBeInTheDocument();
    expect(
      screen.getByText('Mon - Fri: 10:00 am - 02:00 am'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Sat - Sun: 10:00 am - 03:00 am'),
    ).toBeInTheDocument();
  });

  it('displays the "Visit Us" button', () => {
    render(<FindUs />);
    const visitButton = screen.getByRole('button', { name: /visit us/i });
    expect(visitButton).toBeInTheDocument();
  });

  it('renders the image', () => {
    render(<FindUs />);
    const image = screen.getByAltText('finus_img');
    expect(image).toBeInTheDocument();
  });
});
