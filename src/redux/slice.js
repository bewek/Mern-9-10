import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const cartData = state.items.filter(
        (item) => item.id != action.payload.id,
      );

      state.items = cartData;
      localStorage.setItem("cart", JSON.stringify(cartData));
    },
    clearCart: (state) => {
      localStorage.clear();
      state.items = [];
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
