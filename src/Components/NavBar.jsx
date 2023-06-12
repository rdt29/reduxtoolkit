import React from "react";
import { NavLink } from "react-router-dom";
import "./Style/NavBar.css";
import { useSelector } from "react-redux";
export default function NavBar() {
  const cartItems = useSelector((st) => st.Cart);
  //console.log("cartItems: ", cartItems);
  return (
    <>
      <div id="navmain">
        <div id="navleft">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/counter">
            {" "}
            Counter
          </NavLink>
          <NavLink className="navlink" to="/todo">
            {" "}
            Todo List
          </NavLink>
          <NavLink className="navlink" to="/products">
            {" "}
            Products
          </NavLink>
          <NavLink className="navlink" to="/fakeproducts">
            {" "}
            Fake Products
          </NavLink>
          <NavLink className="navlink" to="/fakeproductadd">
            {" "}
            Fake Products Add
          </NavLink>
        </div>
        <div id="navright">
          <NavLink className="navlink" to="/cart">
            Cart <span>{cartItems.length}</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}
