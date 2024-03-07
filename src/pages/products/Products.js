import { Route, Routes } from "react-router-dom";
import { AddProduct } from "./AddProduct";
import { ProductsList } from "./ProductList";
import "./products.css";

export function Products() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList></ProductsList>}></Route>
      <Route path="/add" element={<AddProduct></AddProduct>}></Route>
    </Routes>
  );
}
