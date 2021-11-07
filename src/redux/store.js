import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/ordereSlice";

export const store = configureStore({
  reducer: { orderReducer },
});
