import { configureStore } from '@reduxjs/toolkit';
import {operationsSlice} from "lab8kevin/store/features/operations.slice";

export const store = configureStore({
  reducer: {
    operations: operationsSlice.reducer
  }
});
