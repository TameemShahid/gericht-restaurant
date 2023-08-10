import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByText('The Key to Fine Dining')).toBeInTheDocument();
  });
  it('displays <SubHeading /> component with correct title', () => {
    render(<Header />);
    expect(screen.getByText('Chase the New Flavor')).toBeInTheDocument();
  });
  it('displays the <p /> correctly', () => {
    render(<Header />);
    expect(
      screen.getByText(
        `Est ipsum ad cillum consectetur dolore Lorem deserunt ut qui ea sunt tempor commodo elit. Sint et irure magna id tempor mollit officia. Magna reprehenderit labore ut veniam. Elit est nulla aliqua deserunt labore commodo excepteur eu commodo voluptate id laboris sit mollit. Pariatur eiusmod et voluptate cupidatat est qui velit nisi velit cupidatat culpa.`,
      ),
    ).toBeInTheDocument();
  });
  it('displays the <button /> correctly', () => {
    render(<Header />);
    expect(screen.getByText('Explore Menu')).toBeInTheDocument();
  });
});
