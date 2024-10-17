import { configureStore } from '@reduxjs/toolkit';
import {operationsSlice} from "lab8/store/features/operations.slice";

export const store = configureStore({
  reducer: {
    operations: operationsSlice.reducer
  }
});

