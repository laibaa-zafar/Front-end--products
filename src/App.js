import Header from "./Header";
import AddProduct from "./AddProduct";
import Register from "./Register";
import UpdateProduct from "./UpdateProduct";
import Login from "./Login";
import Protected from "./Protected";
import ProductList from "./ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchProduct from "./SearchProduct";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/update/:id"
            element={<Protected Cmp={UpdateProduct} />}
          />
          <Route
            path="/search"
            element={<Protected Cmp={SearchProduct} />}
          />
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Protected Cmp={ProductList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
