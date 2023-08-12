import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SpecialMenu from './SpecialMenu';
import { data } from '../../constants';

describe('SpecialMenu Component', () => {
  it('renders without crashing', () => {
    render(<SpecialMenu />);
    expect(screen.getByText("Today's Special")).toBeInTheDocument();
  });

  it('displays the "Today\'s Special" heading', () => {
    render(<SpecialMenu />);
    expect(screen.getByText("Today's Special")).toBeInTheDocument();
  });

  it('displays the "Wine & Beer" section', () => {
    render(<SpecialMenu />);
    expect(screen.getByText('Wine & Beer')).toBeInTheDocument();
  });

  it('displays the "Cocktails" section', () => {
    render(<SpecialMenu />);
    expect(screen.getByText('Cocktails')).toBeInTheDocument();
  });

  it('renders the correct number of MenuItems for wines', () => {
    render(<SpecialMenu />);
    const wineItems = screen.getAllByText((item) =>
      data.wines.some((wine) => wine.title === item),
    );
    expect(wineItems.length).toBe(data.wines.length);
  });

  it('renders the correct number of MenuItems for cocktails', () => {
    render(<SpecialMenu />);
    const cocktailItems = screen.getAllByText((item) =>
      data.cocktails.some((cocktail) => cocktail.title === item),
    );
    expect(cocktailItems.length).toBe(data.cocktails.length);
  });

  it('displays the "View More" button', () => {
    render(<SpecialMenu />);
    expect(screen.getByText('View More')).toBeInTheDocument();
  });
});
