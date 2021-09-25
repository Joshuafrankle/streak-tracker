import { createSlice } from "@reduxjs/toolkit";

const streakSlice = createSlice({
  name: "streak",
  initialState: [
    {
      id: 1,
      timeStamp: "9/24/2021",
      title: "Smallvill",
      streakCount: 5,
    },
    {
      id: 2,
      timeStamp: "9/21/2021",
      title: "Flash",
      streakCount: 3,
    },
  ],

  reducers: {
    addStreak: (state, action) => {
      const newStreak = {
        id: state.length + 1,
        timeStamp: new Date().toLocaleDateString(),
        title: action.payload.title,
        streakCount: action.payload.streakCount,
      };
      state.push(newStreak);
    },

    increaseStreak: (state, action) => {
      const id = action.payload;
      state.map(
        (streak) =>
          streak.id === id &&
          (streak.streakCount += 1) &&
          (streak.timeStamp = new Date().toLocaleDateString())
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

    resetStreak: (state) => {
      const theDate = new Date().toLocaleDateString();
      const currentDate = new Date(theDate);
      state.map(
        (streak) =>
          Math.ceil(
            Math.abs(new Date(streak.timeStamp) - currentDate) /
              (1000 * 60 * 60)
          ) >= 24 && (streak.streakCount = 0)
      );
    },
  },
});

export const { addStreak, increaseStreak, decreaseStreak, resetStreak } =
  streakSlice.actions;
export default streakSlice.reducer;
