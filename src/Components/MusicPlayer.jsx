import React, { useEffect, useRef } from 'react';
import song from '../Assets/music/song.mp4'

const MusicPlayer = ({ volume, playOrPause }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Access the audio element using the ref
    const audio = audioRef.current;

    // Set the volume
    audio.volume = volume;

    // Play or pause based on the playOrPause prop
    if (playOrPause) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [volume, playOrPause]);

  return (
    <div>
      <audio ref={audioRef} src={song} />
    </div>
  );
};

export default MusicPlayer;
