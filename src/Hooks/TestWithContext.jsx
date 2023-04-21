import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAudioState from "../Context/AudioStateContext";

import TestControl from "./TestControl";
import TestSeekbar from "./TestSeekbar";
import TestVolume from "./TestVolume";

function TestWithContext() {
  const { isPlaying, activeSong, currentSongs } = useSelector(state => state.player);
  const {
    audioEl,
    duration,
    shuffle,
    repeat,
    handlePlayPause,
    handlePrevSong,
    handleNextSong,
    handleShuffle,
    handleRepeat,
  } = useAudioState();

  // Local States
  const [isReady, setIsReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekVal, setSeekVal] = useState(0);
  const [volume, setVolume] = useState(0.2);

  const sliderRef = useRef();
  const animationRef = useRef();

  const canPlay = () => {
    console.log("audio file can begin to play");
    setIsReady(true);
  };
  const cannotPlay = () => {
    console.log("audio file not ready to play");
    setIsReady(false);
  };

  useEffect(() => {
    if (audioEl?.src) {
      audioEl.addEventListener("loadstart", () => console.log("audio file begins to load"));
      audioEl.addEventListener("progress", () => console.log("audio file begins to progress/load"));
      audioEl.addEventListener("waiting", () => console.log("audio file waiting to continue"));
      audioEl.addEventListener("stalled", () => console.log("file stalled"));
      audioEl.addEventListener("emptied", () => console.log("audio file emptied"));
      audioEl.addEventListener("error", () => console.log("error loading file"));
      audioEl.addEventListener("canplay", canPlay);
    }

    return () => {
      // audioEl.removeEventListener("canplay", canPlay);
    };
  }, [activeSong]);

  useEffect(() => {
    if (audioEl) {
      if (isPlaying) {
        console.log("playing");
        animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
        console.log("stopped");
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioEl !== null) audioEl.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (audioEl !== null) {
      audioEl.currentTime = seekVal;

      const seekBeforeWidth = ((seekVal / audioEl.duration) * 100).toFixed(1);
      sliderRef.current?.style.setProperty("--seek-before-width", `${seekBeforeWidth}%`);

      setCurrentTime(seekVal);
      console.log(seekVal, seekBeforeWidth, audioEl.currentTime);
    }
  }, [seekVal]);

  const whilePlaying = () => {
    if (sliderRef.current) {
      sliderRef.current.value = audioEl?.currentTime;

      const seekBeforeWidth = ((sliderRef.current?.value / audioEl.duration) * 100).toFixed(1);
      sliderRef.current?.style.setProperty("--seek-before-width", `${seekBeforeWidth}%`);

      setCurrentTime(sliderRef.current?.value);

      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const handleVolume = id => {
    if (id === "increase") {
      const newVolume = volume + 0.2;
      if (newVolume.toFixed(1) > 1) return;
      setVolume(prev => Number(prev) + 0.2);
    } else {
      const newVolume = volume - 0.2;
      if (newVolume.toFixed(1) < 0) return;
      setVolume(prev => Number(prev) - 0.2);
    }
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
          console.log(seekVal, e.target.value);
        }}
      />
      <TestControl
        isReady={isReady}
        isPlaying={isPlaying}
        currentSongs={currentSongs}
        shuffle={shuffle}
        repeat={repeat}
        handleShuffle={handleShuffle}
        handleRepeat={handleRepeat}
        handlePrevSong={handlePrevSong}
        handlePlayPause={handlePlayPause}
        handleNextSong={handleNextSong}
      />
      <TestVolume
        volume={volume}
        handleVolume={handleVolume}
        onVolumeChange={e => setVolume(e.target.value)}
      />
    </div>
  );
}

export default TestWithContext;
