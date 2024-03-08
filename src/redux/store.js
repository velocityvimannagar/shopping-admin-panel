import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categoriesSlice";
import { productsReducer } from "./productsSlice";
import { ordersReducer } from "./ordersSlice";

export default configureStore({
  reducer: {
    categoriesStore: categoriesReducer,
    productsStore: productsReducer,
    ordersStore: ordersReducer,
  },
});
