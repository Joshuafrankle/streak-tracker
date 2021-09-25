import { configureStore } from "@reduxjs/toolkit";
import streakReducer from "./slices/streakSlice";

export default configureStore({
  reducer: {
    streak: streakReducer,
  },
});
