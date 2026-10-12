import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";
import productReducer from "./product";
import userReducer from "./user";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
  },
});

export default store;
