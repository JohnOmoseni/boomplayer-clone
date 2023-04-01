import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPlayerScreen: false,
};

const popUpSlice = createSlice({
  name: "popUps",
  initialState,
  reducers: {
    setPlayerScreen: (state, action) => {
      console.log("show Music Player");
      state.showPlayerScreen = action.payload;
    },
  },
});

export const { setPlayerScreen } = popUpSlice.actions;
export default popUpSlice.reducer;
