import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  const response = await axios.get(
    "https://localhost:7277/api/Product/view-all-products"
  );
  return response.data;
});

const productsSlice = createSlice({
  name: "allProducts",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      //console.log("action: ", action);
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
export default productsSlice.reducer;
