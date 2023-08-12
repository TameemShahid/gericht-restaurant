import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Chef from './Chef';

describe('<Chef />', () => {
  it('renders without crashing', () => {
    render(<Chef />);
    expect(screen.getByText("Chef's word")).toBeInTheDocument();
  });

  it('displays the "Chef\'s word" subheading', () => {
    render(<Chef />);
    expect(screen.getByText("Chef's word")).toBeInTheDocument();
  });

  it('displays the "What we believe in" heading', () => {
    render(<Chef />);
    expect(screen.getByText('What we believe in')).toBeInTheDocument();
  });

  it('displays the quote content', () => {
    render(<Chef />);
    expect(
      screen.getByText(
        /Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit./,
      ),
    ).toBeInTheDocument();
  });

  it("displays the Chef's name", () => {
    render(<Chef />);
    expect(screen.getByText('Kevin Luo')).toBeInTheDocument();
  });

  it("displays the Chef's designation", () => {
    render(<Chef />);
    expect(screen.getByText('Chef & Founder')).toBeInTheDocument();
  });

  it("displays the Chef's signature image", () => {
    render(<Chef />);
    const signImage = screen.getByAltText('sign_image');
    expect(signImage).toBeInTheDocument();
  });
});
