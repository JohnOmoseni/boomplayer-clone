import React, { useRef, useEffect } from "react";
import song from "/Tems-Damages.mp3";

const Audio = ({ activeSong, isPlaying, audioRef, repeat, volume, onEnded }) => {
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  });

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  return (
    <audio
      // src={activeSong?.hub?.actions[1]?.uri}
      src={song}
      ref={audioRef}
      preload="auto"
      loop={repeat}
      onEnded={onEnded}
    />
  );
};

export default Audio;
