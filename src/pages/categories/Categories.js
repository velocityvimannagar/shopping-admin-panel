import { Route, Routes } from "react-router-dom";
import { MainCategories } from "./MainCategories";
import { AddMainCategory } from "./AddMainCategory";

export function Categories() {
  return (
    <Routes>
      <Route path="/" element={<MainCategories></MainCategories>}></Route>
      <Route path="/add" element={<AddMainCategory></AddMainCategory>}></Route>
    </Routes>
  );
}
