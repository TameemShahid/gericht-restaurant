import MenuItem from './MenuItem';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

const mockProps = {
  title: 'Test Dish',
  price: '$10',
  tags: 'Delicious, Tasty',
};

describe('MenuItem Component', () => {
  it('renders without crashing', () => {
    render(<MenuItem {...mockProps} />);
    expect(screen.getByText('Test Dish')).toBeInTheDocument();
  });

  it('displays the provided title', () => {
    render(<MenuItem {...mockProps} />);
    expect(screen.getByText('Test Dish')).toBeInTheDocument();
  });

  it('displays the provided price', () => {
    render(<MenuItem {...mockProps} />);
    expect(screen.getByText('$10')).toBeInTheDocument();
  });

  it('displays the provided tags', () => {
    render(<MenuItem {...mockProps} />);
    expect(screen.getByText('Delicious, Tasty')).toBeInTheDocument();
  });
});
