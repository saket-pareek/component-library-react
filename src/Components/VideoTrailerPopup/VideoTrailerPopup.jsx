import { useState } from 'react';
import './VideoTrailerPopup.scss';

function VideoTrailerPopup() {
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <div className='video-trailer-popup'>
      {!showTrailer ? (
        <div className='video-trailer-popup__info'>
          <img
            className='video-trailer-popup__thumbnail'
            src='https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Movie thumbnail'
          />
          <h2 className='video-trailer-popup__title'>Movie Title</h2>
          <p className='video-trailer-popup__description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste
            necessitatibus porro explicabo illo dolorum dolores cupiditate non
            modi quasi nobis, earum ab, autem esse vero sapiente minus vel!
            Provident?
          </p>
          <button
            onClick={() => setShowTrailer(true)}
            className='video-trailer-popup__cta'
            aria-label='Close trailer'>
            Watch now
          </button>
        </div>
      ) : (
        <div className='video-trailer-popup__player'>
          <button
            onClick={() => setShowTrailer(false)}
            className='video-trailer-popup__close'
            aria-label='close video trailer'>
            X
          </button>
          <video
            className='video-trailer-popup__video'
            src='/trailer.mp4'
            controls
          />
        </div>
      )}
    </div>
  );
}

export default VideoTrailerPopup;
