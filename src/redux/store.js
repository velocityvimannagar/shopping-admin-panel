import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categoriesSlice";
import { productsReducer } from "./productsSlice";

export default configureStore({
  reducer: {
    categoriesStore: categoriesReducer,
    productsStore: productsReducer,
  },
});
