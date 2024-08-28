import React from 'react';
import useLazyLoad from './useLazyLoad';

const LazyLoadedVideo = ({ src }) => {
  const { videoRef, isIntersecting } = useLazyLoad();

  return (
    <video
      ref={videoRef}
      src={isIntersecting ? src : null}
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      id="myVideo"
    />
  );
};

export default LazyLoadedVideo;
