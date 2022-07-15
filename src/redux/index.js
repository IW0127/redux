import { configureStore, createSlice } from "@reduxjs/toolkit";

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
export const actions = counterSlice.actions;

console.log(actions);
export const store = configureStore({
  reducer: counterSlice.reducer,
});
