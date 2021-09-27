import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    getUser: (state, action) => {},
    setUser: (state, action) => {
      const userData = action.payload;
      return { ...state, ...userData };
    },
  },
});

export const { getUser, setUser } = userSlice.actions;
export default userSlice.reducer;
