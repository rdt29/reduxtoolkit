import "./App.css";
import IncDec from "./Components/IncDec";
import TodoList from "./Components/TodoList";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Products from "./Components/Products";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import FakeProducts from "./Components/FakeProducts";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/counter" element={<IncDec />} />
        <Route exact path="/todo" element={<TodoList />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/fakeproducts" element={<FakeProducts />} />
      </Routes>
    </div>
  );
}

export default App;
