import React from "react";
// import { useGetAllProductsQuery } from "./RTKQuery/FakeProductSlice";
import { useGetAllCategoriesQuery } from "./RTKQuery/CategoriesSlice";

export default function FakeProducts() {
  // const getAllProductsData = useGetAllProductsQuery();
  // console.log("data: ", getAllProductsData);

  //   if (getAllProductsData.isLoading) {
  //     return <h1>Loading....</h1>;
  // }
  const getAllCategories = useGetAllCategoriesQuery();
  console.log("getAllCategories: ", getAllCategories);
  return <div>FakeProducts</div>;
}
