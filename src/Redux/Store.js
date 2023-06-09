import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice/counterSlice";
import todoSlice from "./Slice/TodoSlice";
import productSlice from "./Slice/productSlice";
import cartSlice from "./Slice/cartSlice";
import { categoriesApi } from "../Components/RTKQuery/CategoriesSlice";
import { fakeProductApi } from "../Components/RTKQuery/FakeProductSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    Todo: todoSlice,
    products: productSlice,
    Cart: cartSlice,
    [fakeProductApi.reducerPath]: fakeProductApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      fakeProductApi.middleware,
      categoriesApi.middleware,
    ]),
});
