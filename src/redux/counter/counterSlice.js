import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrements(state) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export default counterSlice.reducer;
export const actions = counterSlice.actions;
