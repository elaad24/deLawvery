import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addNewOrder: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
    removeOrder: (state, action) => {
      state.orders = state.orders.filter((item) => item.id !== action.payload);
    },
    editOrder: (state, action) => {
      state.orders = state.orders.map((item) => {
        if (item.id === action.payload.id) {
          return (item = action.payload);
        } else {
          return item;
        }
      });
    },
  },
});

export const { addNewOrder, removeOrder, editOrder } = orderSlice.actions;

export default orderSlice.reducer;
