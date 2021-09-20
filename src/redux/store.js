import { configureStore } from "@reduxjs/toolkit";
import streakReducer from "./streakSlice";

export default configureStore({
  reducer: {
    streak: streakReducer,
  },
});
