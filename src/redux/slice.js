import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state) => {
      state.value += 1;
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
