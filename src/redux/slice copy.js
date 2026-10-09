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
    removeFromCart: (state) => {
      state.value > 0 ? (state.value -= 1) : null;
    },
    clearCart: (state) => {
      state.value = 0;
    },
  },
});

export const { addItemToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
