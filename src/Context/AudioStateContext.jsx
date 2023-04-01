import { createContext, useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSong, playPause, prevSong } from "../redux/features/playerSlice";
import song from "/Tems-Damages.mp3";

const AudioState = createContext(null);

const audio = document.createElement("audio");
audio.oncanplay;

export function AudioStateProvider({ children }) {
  const { isPlaying, activeSong, currentIndex, currentSongs } = useSelector(state => state.player);
  const dispatch = useDispatch();

  const [audioEl, setAudioEl] = useState(null);
  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);

  useEffect(() => {
    if (audioEl) {
      if (isPlaying) {
        audioEl.play();
      } else {
        audioEl.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = new Audio(activeSong?.hub?.actions[1]?.uri ?? activeSong?.url);
    const setAudioTime = () => {
      setDuration(Math.floor(audio.duration));
    };

    audio.addEventListener("loadeddata", setAudioTime);
    audio.addEventListener("ended", handleNextSong);

    setAudioEl(audio);
    console.log(audio.src);
    return () => {
      audio.remove("loadeddata", setAudioTime);
      audio.remove("ended", handleNextSong);
      audio.pause();
    };
  }, [activeSong]);

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

  const handleShuffle = e => {
    setShuffle(prevValue => !prevValue);
    if (repeat) setRepeat(!repeat);
  };

  const handleRepeat = e => {
    if (shuffle) setShuffle(!shuffle);
    setRepeat(prevValue => !prevValue);
  };

  const value = {
    audioEl,
    duration,
    shuffle,
    repeat,
    handlePlayPause,
    handlePrevSong,
    handleNextSong,
    handleShuffle,
    handleRepeat,
  };

  return <AudioState.Provider value={value}>{children}</AudioState.Provider>;
}

function useAudioState() {
  const context = useContext(AudioState);
  if (!context) throw new Error("useAudioState must be used within AudioState Provider");

  return context;
}

export default useAudioState;
