import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AwardCard from './AwardCard';

const mockProps = {
  award: {
    imgUrl: 'test-image-url.jpg',
    title: 'Test Award Title',
    subtitle: 'Test Award Subtitle',
  },
};

describe('AwardCard Component', () => {
  it('renders without crashing', () => {
    render(<AwardCard {...mockProps} />);
    expect(screen.getByTestId('awards-img')).toBeInTheDocument();
  });

  it('renders the image with correct src and alt attributes', () => {
    render(<AwardCard {...mockProps} />);
    const imageElement = screen.getByTestId('awards-img');
    expect(imageElement).toHaveAttribute('src', 'test-image-url.jpg');
    expect(imageElement).toHaveAttribute('alt', 'awards');
  });

  it('displays the title correctly', () => {
    render(<AwardCard {...mockProps} />);
    expect(screen.getByText('Test Award Title')).toBeInTheDocument();
  });

  it('displays the subtitle correctly', () => {
    render(<AwardCard {...mockProps} />);
    expect(screen.getByText('Test Award Subtitle')).toBeInTheDocument();
  });
});
