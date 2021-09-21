import { createSlice } from "@reduxjs/toolkit";

const streakSlice = createSlice({
  name: "streak",
  initialState: [
    {
      id: 1,
      title: "Smallvill",
      streakCount: 5,
    },
    {
      id: 2,
      title: "Flash",
      streakCount: 3,
    },
  ],

  reducers: {
    addStreak: (state, action) => {
      const newStreak = {
        id: state.length + 1,
        title: action.payload.title,
        streakCount: action.payload.streakCount,
      };
      state.push(newStreak);
    },

    increaseStreak: (state, action) => {
      const id = action.payload;
      state.map((streak) => streak.id === id && (streak.streakCount += 1));
    },

    decreaseStreak: (state, action) => {
      const id = action.payload;
      state.map((streak) => streak.id === id && (streak.streakCount -= 1));
    },

    resetStreak: (state, action) => {
      const id = action.payload;
      state.map((streak) => streak.id === id && (streak.streakCount = 0));
    },
  },
});

export const { addStreak, increaseStreak, decreaseStreak, resetStreak } =
  streakSlice.actions;
export default streakSlice.reducer;
