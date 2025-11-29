// Author: Suraj Singh
// Project: Frontend Assignment

import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './slices/roleSlice.js';
import membersReducer from './slices/membersSlice';

export const store = configureStore({
  reducer: {
    role: roleReducer,
    members: membersReducer
  }
});
