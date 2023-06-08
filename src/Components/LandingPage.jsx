import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

export default function LandingPage() {
  return (
    <div>
      
      {/* <center>LandingPage</center> */}
      <br /><br />
      <NavLink to="/counter"> Counter</NavLink> <br />
      <NavLink to="/todo"> Todo List</NavLink> <br />
      <NavLink to="/products"> Products</NavLink>
    </div>
  );
}
