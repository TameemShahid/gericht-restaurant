import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { data } from '../../constants';
import Laurels from './Laurels';

describe('<Laurels Component', () => {
  beforeAll(() => {
    jest
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockResolvedValue(undefined);
    jest
      .spyOn(window.HTMLMediaElement.prototype, 'pause')
      .mockImplementation(jest.fn());
  });

  it('renders without crashing', () => {
    render(<Laurels />);
    expect(screen.getByText('Awards & recognition')).toBeInTheDocument();
  });

  it('displays the "Awards & recognition" subheading', () => {
    render(<Laurels />);
    expect(screen.getByText('Awards & recognition')).toBeInTheDocument();
  });

  it('displays the "Our Laurels" heading', () => {
    render(<Laurels />);
    expect(screen.getByText('Our Laurels')).toBeInTheDocument();
  });

  it('renders the correct number of AwardCard components', () => {
    render(<Laurels />);
    const awardCards = screen.getAllByTestId('awards-img');
    expect(awardCards.length).toBe(data.awards.length);
  });

  it('displays the laurels image', () => {
    render(<Laurels />);
    expect(screen.getByAltText('laurels_img')).toBeInTheDocument();
  });
});
