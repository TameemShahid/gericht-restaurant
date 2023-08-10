import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('AboutUs Component', () => {
  it('renders without crashing', () => {
    render(<AboutUs />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  it('displays the "About Us" heading', () => {
    render(<AboutUs />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  it('displays the "Our History" heading', () => {
    render(<AboutUs />);
    expect(screen.getByText('Our History')).toBeInTheDocument();
  });

  it('displays the G letter image', () => {
    render(<AboutUs />);
    expect(screen.getByAltText('G letter')).toBeInTheDocument();
  });

  it('displays the about spoon image', () => {
    render(<AboutUs />);
    expect(screen.getAllByAltText('about_spoon')[0]).toBeInTheDocument();
  });

  it('displays the about knife image', () => {
    render(<AboutUs />);
    expect(screen.getByAltText('about_knife')).toBeInTheDocument();
  });

  it('has "Know More" buttons', () => {
    render(<AboutUs />);
    const buttons = screen.getAllByText('Know More');
    expect(buttons).toHaveLength(2);
  });
});
