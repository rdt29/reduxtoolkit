import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../Redux/Slice/TodoSlice";
import "./Style/todoList.css";
export default function TodoList() {
  const dispatch = useDispatch();
  const response = useSelector((st) => st.Todo);

  if (response.isLoading) {
    return (
      <>
        <h1>Loading.........................</h1>
      </>
    );
  }

  return (
    <div>
      <button className="fetchBtn" onClick={() => dispatch(fetchTodo())}>Load Data</button>
      <div className="tabledata">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {response.data.length > 0 &&
              response.data.map((elem) => {
                return (
                  <tr key={elem.id}>
                    <td>{elem.id}</td>
                    <td>{elem.userId}</td>
                    <td>{elem.title}</td>
                    <td>{elem.completed ? "Completed" : "Panding"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
