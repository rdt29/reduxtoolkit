import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action
export const fetchTodo = createAsyncThunk("fetchTodos", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return response.data;
});

const todoSlice = createSlice({
  name: "Todo",
  initialState: {
    isLoading: false,
    error: null,
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state) => {  
      state.isLoading = true;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodo.rejected, (state, action) => {
       state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default todoSlice.reducer;
