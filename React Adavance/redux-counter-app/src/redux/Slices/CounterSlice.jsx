import { createSlice } from '@reduxjs/toolkit'; // Correct import

const initialState = {
  value: 0,
};

const counterSlice = createSlice({ // Use a different name
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
