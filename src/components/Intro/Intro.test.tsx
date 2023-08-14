import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Intro from './Intro';

describe('<Intro />', () => {
  beforeAll(() => {
    jest
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockResolvedValue(undefined);
    jest
      .spyOn(window.HTMLMediaElement.prototype, 'pause')
      .mockImplementation(jest.fn());
  });

  it('renders without crashing', () => {
    render(<Intro />);
    const videoElement = screen.getByTestId('video');
    expect(videoElement).toBeInTheDocument();
  });

  it('displays the play icon initially', () => {
    render(<Intro />);
    const playIcon = screen.getByTestId('play');
    expect(playIcon).toBeInTheDocument();
    expect(screen.queryByTestId('pause')).not.toBeInTheDocument();
  });

  it('toggles icons when video is clicked', () => {
    render(<Intro />);
    const videoElement = screen.getByTestId('video');

    // Simulate click on the video
    fireEvent.click(videoElement);

    // Pause icon should be displayed and play icon should not
    expect(screen.getByTestId('pause')).toBeInTheDocument();
    expect(screen.queryByTestId('play')).not.toBeInTheDocument();

    // Simulate another click on the video
    fireEvent.click(videoElement);

    // Play icon should be displayed again and pause icon should not
    expect(screen.getByTestId('play')).toBeInTheDocument();
    expect(screen.queryByTestId('pause')).not.toBeInTheDocument();
  });
});
