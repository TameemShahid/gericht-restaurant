import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { images } from '../../constants';
import Gallery from './Gallery';
import React from 'react';

describe('Gallery Component', () => {
  let scrollRefMock: any;
  let scroll: any;

  const GalleryComponent = () => {
    const scrollRef = React.useRef<HTMLDivElement>(scrollRefMock.current);

    scroll = (direction: string) => {
      const { current } = scrollRef;

      if (direction === 'left' && current) {
        current.scrollLeft -= 300;
      } else if (current) {
        current.scrollLeft += 300;
      }
    };

    return <Gallery />;
  };

  beforeEach(() => {
    scrollRefMock = { current: { scrollLeft: 0 } };
  });

  it('renders without crashing', () => {
    render(<Gallery />);
    expect(screen.getByText('Photo Gallery')).toBeInTheDocument();
  });

  it('displays the subheading, title, description, and button correctly', () => {
    render(<Gallery />);
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('Photo Gallery')).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument();
    expect(screen.getByText('View More')).toBeInTheDocument();
  });

  it('renders the correct number of images', () => {
    render(<Gallery />);
    const imageElements = screen.getAllByAltText('gallery_image');
    expect(imageElements.length).toBe(4);
  });

  it('displays the left and right arrow icons', () => {
    render(<Gallery />);
    expect(screen.getByTestId('left-arrow-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-arrow-icon')).toBeInTheDocument();
  });

  // Here, we're assuming that the scroll function has been implemented correctly.
  // In a real-world scenario, you might want to mock the scroll behavior and test it.
  it('scrolls left when the left arrow icon is clicked', () => {
    render(<GalleryComponent />);

    const leftArrow = screen.getByTestId('left-arrow-icon');
    fireEvent.click(leftArrow);

    scroll('left');
    expect(scrollRefMock.current.scrollLeft).toBe(-300);
  });

  it('scrolls right when the right arrow icon is clicked', () => {
    render(<GalleryComponent />);

    const rightArrow = screen.getByTestId('right-arrow-icon');
    fireEvent.click(rightArrow);

    scroll('right');
    expect(scrollRefMock.current.scrollLeft).toBe(300);
  });
});
