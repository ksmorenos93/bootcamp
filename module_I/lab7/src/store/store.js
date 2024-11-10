import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from "lab7/store/counter.slice";

const store = configureStore({
    reducer: {
      counter: counterSlice.reducer
    }
  }
);

export default store;