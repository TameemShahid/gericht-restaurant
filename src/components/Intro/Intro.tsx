import { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoPlay = () => {
    setPlayVideo(!playVideo);
    if (playVideo && vidRef.current) {
      vidRef.current.pause();
    } else if (!playVideo && vidRef.current) {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        loop
        controls={false}
        muted
        onClick={handleVideoPlay}
        data-testid="video"
      />
      <div
        className="app__video-overlay flex__center"
        style={{ display: playVideo ? 'none' : 'flex' }}
        onClick={handleVideoPlay}
      >
        <div className="app__video-overlay_circle flex__center">
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} data-testid="pause" />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} data-testid="play" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
