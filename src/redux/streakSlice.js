import { createSlice } from "@reduxjs/toolkit";

const streakSlice = createSlice({
  name: "streak",
  initialState: [
    {
      id: 1,
      timeStamp: 1632196678975,
      title: "Smallvill",
      streakCount: 5,
    },
    {
      id: 2,
      timeStamp: 1632196678975,
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
        timeStamp: Date.now(),
      };
      state.push(newStreak);
    },

    increaseStreak: (state, action) => {
      const id = action.payload;
      state.map(
        (streak) =>
          streak.id === id &&
          ((streak.streakCount += 1), (streak.timeStamp = Date.now()))
      );
    },

    decreaseStreak: (state, action) => {
      const id = action.payload;
      state.map(
        (streak) =>
          streak.id === id &&
          (streak.streakCount === 0
            ? (streak.streakCount = 0)
            : (streak.streakCount -= 1))
      );
    },

    resetStreak: (state, action) => {
      const current_date = action.payload;
      state.map(
        (streak) =>
          streak.timeStamp - current_date === 1 && (streak.streakCount = 0)
      );
    },
  },
});

export const { addStreak, increaseStreak, decreaseStreak, resetStreak } =
  streakSlice.actions;
export default streakSlice.reducer;
