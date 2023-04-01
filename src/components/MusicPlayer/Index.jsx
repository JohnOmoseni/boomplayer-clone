import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSong, playPause, prevSong } from "../../redux/features/playerSlice";

import Controls from "./Controls";
import Volume from "./Volume";
import Audio from "./Audio";
import SeekBar from "./SeekBar";

function Index() {
  const { activeSong, isPlaying, isActive, currentSongs, currentIndex } = useSelector(
    state => state.player
  );
  const dispatch = useDispatch();

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTIme] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [volume, setVolume] = useState(0.2);

  const audioRef = useRef();
  const sliderRef = useRef();
  const animationRef = useRef();
  const audioElem = audioRef.current;
  const sliderElem = sliderRef.current;

  useEffect(() => {
    const seconds = Math.floor(audioElem?.duration);
    !isNaN(seconds) && setDuration(seconds);
    if (sliderElem) {
      sliderElem.max = seconds ? seconds : 100;
    }
    console.log(audioRef, sliderRef, seconds, duration, audioElem?.readyState);
  }, [audioElem?.readyState]);

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      cancelAnimationFrame(animationRef.current);
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    // if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleSliderChange = () => {
    audioElem.currentTime = sliderElem.value;
    const seekWidth = (sliderElem.value / audioElem?.duration) * 100;
    sliderElem.style.setProperty("--seek-before-width", `${seekWidth}%`);
    setCurrentTIme(sliderElem.value);
  };

  const whilePlaying = () => {
    sliderElem.value = audioElem?.currentTime;

    const seekWidth = (sliderElem?.value / audioElem?.duration) * 100;
    sliderElem.style.setProperty("--seek-before-width", `${seekWidth}%`);
    setCurrentTIme(sliderElem.value);

    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const handleNextSong = () => {
    let index;
    dispatch(playPause(false));

    if (shuffle) {
      index = currentSongs.length && Math.floor(Math.random() * currentSongs.length);
    } else {
      index = (currentIndex + 1) % currentSongs?.length;
    }

    dispatch(nextSong(index));
  };

  const handlePrevSong = () => {
    dispatch(playPause(false));
    let index;
    if (currentIndex === 0) {
      index = currentSongs.length - 1;
    } else {
      index = currentIndex - 1;
    }
    dispatch(prevSong(index));
  };

  return (
    <div className="control-container">
      <SeekBar
        sliderRef={sliderRef}
        currentTime={currentTime}
        duration={duration}
        handleSliderChange={handleSliderChange}
      />

      <Controls
        isPlaying={isPlaying}
        currentSongs={currentSongs}
        shuffle={shuffle}
        setShuffle={setShuffle}
        handlePrevSong={handlePrevSong}
        handlePlayPause={handlePlayPause}
        handleNextSong={handleNextSong}
        repeat={repeat}
        setRepeat={setRepeat}
      />

      <Audio
        audioRef={audioRef}
        activeSong={activeSong}
        isPlaying={isPlaying}
        repeat={repeat}
        volume={volume}
        onEnded={() => handleNextSong()}
      />

      <Volume volume={volume} onChange={e => setVolume(e.target.value)} />
    </div>
  );
}

export default Index;
