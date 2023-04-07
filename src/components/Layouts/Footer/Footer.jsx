import React, { useEffect, useRef } from "react";
import Player from "./Player";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";
import useAudioState from "../../../Context/AudioStateContext";

function Footer() {
  const { isPlaying } = useSelector(state => state.player);
  const { audioEl, duration } = useAudioState();

  const width = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    if (audioEl) {
      if (isPlaying) {
        animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [isPlaying]);

  const whilePlaying = () => {
    width.current = Math.floor((audioEl.currentTime / duration) * 100);
    if (progressBar.current)
      progressBar.current.style.setProperty("--progress-width", `${width.current}%`);

    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  return (
    <div className="player-container">
      <div className="progress-bar" ref={progressBar}></div>
      <Player />
      <NavLinks />
    </div>
  );
}

export default Footer;
