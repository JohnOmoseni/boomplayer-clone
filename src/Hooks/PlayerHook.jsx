import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Audio from "../components/Layouts/MusicPlayer/Audio";
import { nextSong, playPause, prevSong } from "../redux/features/playerSlice";

function useAudioPlayerHook() {
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

  console.log(audioRef, sliderRef);

  useEffect(() => {
    const seconds = Math.floor(audioElem?.duration);
    setDuration(seconds);
    if (sliderElem) {
      sliderElem.max = seconds ? seconds : 100;
    }
    console.log(seconds);
  });

  const handlePlayPause = () => {
    // if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
      cancelAnimationFrame(animationRef.current);
    } else {
      dispatch(playPause(true));
      animationRef.current = requestAnimationFrame(whilePlaying);
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
    console.log(index);

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

  const value = {
    audioRef,
    sliderRef,
    currentTime,
    duration,
    shuffle,
    repeat,
    volume,
    setShuffle,
    setRepeat,
    setVolume,
    handleSliderChange,
    handleNextSong,
    handlePlayPause,
    handlePrevSong,
  };

  return value;
}

export default useAudioPlayerHook;
