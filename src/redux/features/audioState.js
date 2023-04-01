import { createSlice } from "@reduxjs/toolkit";

const initialAudioState = {
  audioEl: null,
  duration: 0,
  shuffle: false,
  repeat: false,
};

const audioStateSlice = createSlice({
  name: "audioStateSlice",
  initialState: initialAudioState,
  reducers: {
    setAudioEl: (state, action) => {
      if (state.audioEl === null) {
        state.audioEl = action.payload;
        if (audioEl) state.duration = state.audioEl.duration;
      }
    },
    setDuration: (state, action) => {
      if (audioEl) state.duration = state.audioEl.duration;
    },
    setShuffle: state => {
      if (state.repeat) state.repeat = false;
      state.shuffle = !state.shuffle;
    },
    setRepeat: (state, action) => {
      if (state.shuffle) state.shuffle = false;
      state.repeat = !state.repeat;
    },
  },
});
