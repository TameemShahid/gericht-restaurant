import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubHeading from './SubHeading';

describe('<SubHeading />', () => {
  it('renders without crashing', () => {
    render(<SubHeading title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('displays the provided title', () => {
    const title = 'Test Title';
    render(<SubHeading title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('displays the spoon image', () => {
    render(<SubHeading title="Test Title" />);
    expect(screen.getByAltText('Spoon')).toBeInTheDocument();
  });
});
