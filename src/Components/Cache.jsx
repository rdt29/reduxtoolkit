import React, { useState } from "react";
import {
  useAddNewCategorieMutation,
  useGetAllCategoriesQuery,
} from "./RTKQuery/CategoriesSlice";

export default function Cache() {
  const Categories = useGetAllCategoriesQuery();
  const [addNewCategories, addCategoriesResponse] =
    useAddNewCategorieMutation();

  const [newCategories, setNewCategories] = useState("");

  console.log("isloading: ", Categories.isLoading);
  console.log("IsFeatching: ", Categories.isFetching);
  if (Categories.isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else if (Categories.isError) {
    return <>{Categories.error.status}</>;
  }

  return (
    <div style={{ margin: "50px" }}>
      <h1>Add Categories</h1>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setNewCategories(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (newCategories != "") {
            addNewCategories(newCategories);
          }
        }}
      >
        Add New{" "}
      </button>

      <h1>Categories</h1>
      {Categories.data.map((elem, index) => {
        return <li key={index}>{elem.categoryName}</li>;
      })}
    </div>
  );
}
