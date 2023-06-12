import React from "react";
// import { useGetAllProductsQuery } from "./RTKQuery/FakeProductSlice";
import { useGetAllCategoriesQuery } from "./RTKQuery/CategoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCreateAction,
  incrementCreateAction,
} from "../createReducer/createReducerCounter";

export default function FakeProducts() {
  const dispatch = useDispatch();
  // const getAllProductsData = useGetAllProductsQuery();
  // //console.log("data: ", getAllProductsData);

  //   if (getAllProductsData.isLoading) {
  //     return <h1>Loading....</h1>;
  // }
  const getAllCategories = useGetAllCategoriesQuery();
  //console.log("getAllCategories: ", getAllCategories);

  const count = useSelector((st) => st.counterCreaterReducer);

  return (
    <div style={{ textAlign: "center" }}>
      FakeProducts
      <h1>createReducer / createAction </h1>
      <br />
      <h3>{count.value}</h3>
      <button
        onClick={() => {
          dispatch(decrementCreateAction());
        }}
      >
        Dec
      </button>
      <button
        onClick={() => {
          dispatch(incrementCreateAction());
        }}
      >
        Inc{" "}
      </button>{" "}
    </div>
  );
}
