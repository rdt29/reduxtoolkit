import React, { useEffect } from "react";
import "./Style/products.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../Redux/Slice/productSlice";
import { addToCart } from "../Redux/Slice/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const response = useSelector((st) => st.products);

  useEffect(() => {
    dispatch(fetchProduct())
  }, []);

  const addToCartBtn = (product) => {
    dispatch(addToCart(product));
  };

  if (response.isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <div id="main">
        <h1>Products List</h1>
        <div className="products">
          {response.data.map((elem) => {
            return (
              <div className="productCart">
                <img src={elem.imageURL} alt="img" />
                <h5>{elem.productName}</h5>
                <h5>{elem.price}</h5>
                <p>{elem.productDescription}</p>

                <button
                  onClick={() => {
                    addToCartBtn(elem);
                  }}
                  className="cartbtn"
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
