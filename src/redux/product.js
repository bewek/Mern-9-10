import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products", async () => {
  let response = await fetch("https://dummyjson.com/products");
  response = await response.json();
  return response.products;
});

const initialState = {
  items: [],
  status: undefined,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "Success";
      state.items = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "Loading";
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "Failed";
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
