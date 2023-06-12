import React, { useState } from "react";
import { useAddFakeProductMutation } from "./RTKQuery/FakeProductAddSlice";
import { useGetAllUsersQuery } from "./RTKQuery/FetchAllUserAuthSlice";

export default function FakeProductAdd() {
  const [data, setData] = useState({
    userId: 1,
    title: "rdt tittle",
    body: "rdt body",
  });
  const AddProduct = useAddFakeProductMutation();
  console.log("AddProduct: ", AddProduct);
  const [fnc, obj] = AddProduct;
  const FetchUser = useGetAllUsersQuery();
  console.log("FetchUser: ", FetchUser);

  //console.log("AddProduct: ", AddProduct);
  const addBtn = () => {
    fnc(data);
  };

  console.log("Response Add ", obj);
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      FakeProductAdd <br />
      <button onClick={addBtn}>Add Product</button> <br />
      Auth User Get All <br />
      <button
        onClick={() => {
          console.log("FetchUser: ", FetchUser);
        }}
      >
        Add Product
      </button>
    </div>
  );
}
