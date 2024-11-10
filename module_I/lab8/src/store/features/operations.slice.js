import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  divisor: 0,
  division: 0,
  module: 0,
  dividend: 0
};

export const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    getDivision: (state, action) => {
      console.log(`getDivision::action ${JSON.stringify(action)}`);
      state.division = action.payload.divisor / action.payload.dividend;
    },
    getModule: (state, action) => {
      console.log(`getModule::action ${JSON.stringify(action)}`);
      state.module = action.payload.divisor % 2;
    }
  }
});

export const {getDivision, getModule} = operationsSlice.actions;
