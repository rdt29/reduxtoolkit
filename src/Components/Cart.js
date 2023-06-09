import { current } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((st) => st.Cart);
  const navigation = useNavigate();

  const totalAmount = useRef(0);
  const uniqueArray = cartItems.filter(
    (item, index, arr) => index === arr.findIndex((i) => i.id === item.id)
  );

  useEffect(() => {
    
    
    totalAmount.current = 0;
  },[]);
  if (cartItems.length == 0) {
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <h1>Cart is Empty !</h1>
        <h4
          style={{
            textAlign: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "lightgreen",
              border: "none",
              padding: "10px",
              borderRadius: "20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigation("/products");
            }}
          >
            Continue Shoping{" "}
          </button>
        </h4>
      </div>
    );
  }

  return (
    <div style={{ margin: "50px 0px 0px 40px " }}>
      <table>
        <thead>
          <tr>
            <th>sno</th>
            <th>image</th>
            <th>Product Name</th>
            <th>Desc</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {uniqueArray.map((unique, index) => {
            let count = 0;
            cartItems.map((item) => {
              if (item.id === unique.id) {
                count++;
              }
            });
            totalAmount.current += unique.price * count;

            return (
              <tr>
                <td>{index + 1}</td>
                <td style={{ height: "100px", width: "200px" }}>
                  <img
                    style={{ borderRadius: "20px" }}
                    src={unique.imageURL}
                    height={"100%"}
                    width={""}
                    alt=""
                  />
                </td>
                <td>{unique.productName}</td>
                <td>{unique.productDescription}</td>
                <td>{unique.price}</td>
                <td>{count}</td>
                <td>{unique.price * count}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={6}>Total Amount </td>
            <td>
              <b> {totalAmount.current} </b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
