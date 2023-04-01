import { createSlice } from "@reduxjs/toolkit";

const initialPlayerState = {
  currentSongs: [],
  currentIndex: 0,
  isPlaying: false,
  isActive: false,
  activeSong: {},
  genreListId: "",
};

const playerSlice = createSlice({
  name: "musicPlayer",
  initialState: initialPlayerState,
  reducers: {
    setActiveSong: (state, action) => {
      const { song, data, idx } = action.payload;

      state.activeSong = action.payload?.song;

      if (action.payload?.data) {
        if (action.payload.data?.tracks?.hits) {
          state.currentSongs = action.payload?.data?.tracks?.hits;
        } else {
          state.currentSongs = action.payload?.data;
        }
      }
      state.currentIndex = action.payload.idx;
      state.isActive = true;

      console.log(state.activeSong, state.currentSongs, action.payload.song?.tracks);
    },

    nextSong: (state, action) => {
      const index = action.payload;

      if (state.currentSongs.length) {
        if (state.currentSongs[index]?.track) {
          state.activeSong = state.currentSongs[index].track;
        } else {
          state.activeSong = state.currentSongs[index];
        }
      }

      state.currentIndex = index;
      state.isActive = true;
    },
    prevSong: (state, action) => {
      const index = action.payload;
      if (state.currentSongs.length) {
        if (state.currentSongs[index]?.track) {
          state.activeSong = state.currentSongs[index].track;
        } else {
          state.activeSong = state.currentSongs[index];
        }
      }

      state.isActive = true;
      state.currentIndex = index;
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export default playerSlice.reducer;
export const { setActiveSong, nextSong, prevSong, playPause } = playerSlice.actions;
