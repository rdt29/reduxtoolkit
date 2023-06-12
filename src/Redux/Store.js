import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice/counterSlice";
import todoSlice from "./Slice/TodoSlice";
import productSlice from "./Slice/productSlice";
import cartSlice from "./Slice/cartSlice";
import { categoriesApi } from "../Components/RTKQuery/CategoriesSlice";
import { fakeProductApi } from "../Components/RTKQuery/FakeProductSlice";
import { counterCreateReducer } from "../createReducer/createReducerCounter";
import { fakeProductAddApi } from "../Components/RTKQuery/FakeProductAddSlice";
import { fetchAllUserApi } from "../Components/RTKQuery/FetchAllUserAuthSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    Todo: todoSlice,
    products: productSlice,
    Cart: cartSlice,
    counterCreaterReducer: counterCreateReducer,

    [fakeProductApi.reducerPath]: fakeProductApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [fakeProductAddApi.reducerPath]: fakeProductAddApi.reducer,
    [fetchAllUserApi.reducerPath]: fetchAllUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      fakeProductApi.middleware,
      categoriesApi.middleware,
      fakeProductAddApi.middleware,
      fetchAllUserApi.middleware,
    ]),
});
