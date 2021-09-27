import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    getUser: (state, action) => {},
    setUser: (state, action) => {
      const userData = action.payload;
      const abc = userData;
      console.log("hello", abc);
      return { ...state, ...userData };
    },
  },
});

console.log("userSlice", userSlice);

export const { getUser, setUser } = userSlice.actions;
export default userSlice.reducer;
