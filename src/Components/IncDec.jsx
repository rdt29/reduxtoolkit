import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Slice/counterSlice";

export default function IncDec() {
    const dispatch = useDispatch();
    const count = useSelector((st)=>st.counter.value)
  return (
    <>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  );
}
