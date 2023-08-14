import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('displays the FooterOverlay and Newsletter components', () => {
    render(<Footer />);
    expect(screen.getByTestId('footerOverlay-img')).toBeInTheDocument();
    expect(screen.getByText('Subscribe To Our Newsletter')).toBeInTheDocument();
  });

  it('displays contact details, logo, social media icons, working hours, and copyright notice', () => {
    render(<Footer />);
    expect(
      screen.getByText('9 W 53rd St, New York, NY 10019, USA'),
    ).toBeInTheDocument();
    expect(screen.getByText('+1 212-344-1230')).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /footer_logo/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('Monday-Friday:')).toBeInTheDocument();
    expect(screen.getByText('Saturday-Sunday:')).toBeInTheDocument();
    expect(
      screen.getByText('2021 Gericht. All Rights reserved.'),
    ).toBeInTheDocument();

    // Check for presence of social media icons
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
  });
});
