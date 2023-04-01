import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSong, playPause } from "../redux/features/playerSlice";
import TestControl from "./TestControl";
import TestSeekbar from "./TestSeekbar";
import TestVolume from "./TestVolume";
import song from "/Tems-Damages.mp3";

function TestPlayer() {
  const { isPlaying, activeSong, currentIndex, currentSongs } = useSelector(state => state.player);
  const dispatch = useDispatch();

  // Local States
  const [audioEl, setAudioEl] = useState(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekVal, setSeekVal] = useState(0);
  const [volume, setVolume] = useState(0.3);

  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const sliderRef = useRef();
  const animationRef = useRef();

  useEffect(() => {
    let audio = new Audio(song);

    const setAudioData = () => {
      // setCurrentTime(Math.floor(audio.currentTime));
      setDuration(Math.floor(audio.duration));
    };

    const setVolumeChange = () => {
      setVolume(audio.volume);
    };

    const setAudioEnded = () => handleNextSong();

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("volumechange", setVolumeChange);
    audio.addEventListener("ended", setAudioEnded);

    setAudioEl(audio);

    return () => {
      audio.pause();
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("volumechange", setVolumeChange);
      audio.removeEventListener("ended", setAudioEnded);
    };
  }, []);

  useEffect(() => {
    if (audioEl) {
      if (isPlaying) {
        audioEl.play();
        console.log(audioEl);
        animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
        audioEl.pause();
        console.log("stopped");
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [isPlaying]);

  const whilePlaying = () => {
    if (sliderRef.current) {
      sliderRef.current.value = audioEl?.currentTime;

      const seekBeforeWidth = Math.floor((sliderRef.current?.value / audioEl.duration) * 100);
      sliderRef.current?.style.setProperty("--seek-before-width", `${seekBeforeWidth}%`);
      setCurrentTime(sliderRef.current?.value);

      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  useEffect(() => {
    if (audioEl !== null) audioEl.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (audioEl !== null) {
      // dispatch(playPause(false));
      // audioEl.pause();
      audioEl.currentTime = seekVal;

      const seekBeforeWidth = Math.floor((seekVal / audioEl.duration) * 100);
      sliderRef.current?.style.setProperty("--seek-before-width", `${seekBeforeWidth}%`);

      setCurrentTime(seekVal);
      console.log(seekVal, seekBeforeWidth, audioEl.currentTime);
    }
  }, [seekVal]);

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
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
    let index;
    dispatch(playPause(false));

    index = (currentIndex - 1 + currentSongs?.length) % currentSongs?.length;
    // if (currentIndex === 0) {
    //   index = currentSongs.length - 1;
    // } else {
    //   index = currentIndex - 1;
    // }
    dispatch(prevSong(index));
  };

  return (
    <div className="control-container">
      <TestSeekbar
        sliderRef={sliderRef}
        seekValue={seekVal}
        currentTime={currentTime}
        duration={duration}
        onSliderChange={e => {
          setSeekVal(e.target.value);
        }}
      />
      <TestControl
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
      <TestVolume volume={volume} onVolumeChange={e => setVolume(e.target.value)} />
    </div>
  );
}

export default TestPlayer;
