// Author: Suraj Singh
// Project: Frontend Assignment

import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
  name: "role",
  initialState: {
    currentRole: "member",
    currentUser: "Alice", // Change to match a real member
  },
  reducers: {
    switchRole: (state) => {
      state.currentRole = state.currentRole === "member" ? "lead" : "member";
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { switchRole, setUser } = roleSlice.actions;
export default roleSlice.reducer;
