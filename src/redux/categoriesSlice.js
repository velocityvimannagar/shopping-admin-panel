import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "Categories",
  initialState: {
    mainCategories: [],
    subCategories: [],
  },
  reducers: {
    storeMainCategories: (state, data) => {
      state.mainCategories = data.payload;
    },
    storeSubCategories: (state, data) => {
      state.subCategories = data.payload;
    },
  },
});

export const { storeMainCategories, storeSubCategories } =
  categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
