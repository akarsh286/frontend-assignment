// Author: Suraj Singh
// Project: Frontend Assignment

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Alice", status: "Working", tasks: [] },
  { id: 2, name: "Bob", status: "Break", tasks: [] },
];

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      const user = state.find((m) => m.name === action.payload.name);
      if (user) user.status = action.payload.status;
    },

    assignTask: (state, action) => {
      const user = state.find((m) => m.name === action.payload.member);
      if (user) user.tasks.push(action.payload.task);
    },

    updateTaskProgress: (state, action) => {
      const { member, taskId, progress } = action.payload;
      const user = state.find((m) => m.name === member);
      if (!user) return;

      const task = user.tasks.find((t) => t.id === taskId);
      if (task) {
        task.progress = Math.max(0, Math.min(progress, 100)); // clamp between 0-100
      }
    },
  },
});

export const { updateStatus, assignTask, updateTaskProgress } = membersSlice.actions;
export default membersSlice.reducer;
