import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FooterOverlay from './FooterOverlay';

describe('<FooterOverlay />', () => {
  it('renders without crashing', () => {
    render(<FooterOverlay />);
    expect(screen.getByTestId('footerOverlay-img')).toBeInTheDocument();
  });

  it('displays the black overlay and image divs', () => {
    render(<FooterOverlay />);
    expect(screen.getByTestId('footerOverlay-black')).toBeInTheDocument();
    expect(screen.getByTestId('footerOverlay-img')).toBeInTheDocument();
  });
});
