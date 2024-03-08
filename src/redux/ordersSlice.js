import { createSlice } from "@reduxjs/toolkit";

const orderssSlice = createSlice({
  name: "Orders",
  initialState: {
    orders: [],
  },
  reducers: {
    storeOrders: (state, data) => {
      state.orders = data.payload;
    },
  },
});

export const { storeOrders } = orderssSlice.actions;

export const ordersReducer = orderssSlice.reducer;
