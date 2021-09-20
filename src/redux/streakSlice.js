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
  },
});

export const { addStreak } = streakSlice.actions;
export default streakSlice.reducer;
