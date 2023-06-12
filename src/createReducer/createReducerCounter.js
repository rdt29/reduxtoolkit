import { createAction, createReducer } from "@reduxjs/toolkit";

export const incrementCreateAction = createAction("counter/increment");
export const decrementCreateAction = createAction("counter/decrement");

const initialState = {
  value: 0,
};

export const counterCreateReducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementCreateAction, (state) => {
    state.value += 1;
  });

  builder.addCase(decrementCreateAction, (state) => {
    state.value -= 1;
  });
});

