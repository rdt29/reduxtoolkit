import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice/counterSlice";
import todoSlice from "./Slice/TodoSlice";
import productSlice from "./Slice/productSlice";
import cartSlice from "./Slice/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    Todo: todoSlice,
    products: productSlice,
    Cart: cartSlice,
  },
});
