import { configureStore } from "@reduxjs/toolkit";
import PlayerSliceReducer from "./features/playerSlice";
import PopUpSliceReducer from "./features/popUpSlice";
import { shazamApi } from "./features/shazamApiSlice";

const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    player: PlayerSliceReducer,
    popUps: PopUpSliceReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(shazamApi.middleware);
  },
});

export default store;
