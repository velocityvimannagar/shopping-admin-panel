import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "Products",
  initialState: {
    products: [],
  },
  reducers: {
    storeProducts: (state, data) => {
      state.products = data.payload;
    },
  },
});

export const { storeProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
