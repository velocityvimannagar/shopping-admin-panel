import { Navigate, Route, Routes } from "react-router-dom";
import { MainCategories } from "./main-categories/MainCategories";
import { AddMainCategory } from "./main-categories/AddMainCategory";
import { SubCategories } from "./sub-categories/SubCategories";
import { AddSubCategory } from "./sub-categories/AddSubCategory";
import { storeMainCategories, storeSubCategories } from "../../redux/categoriesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data from API
    dispatch(
      storeMainCategories([
        {
          id: "1",
          category: "Transform LED",
          description: "TRF LED",
          createdAt: "04 March 2024",
        },
        {
          id: "2",
          category: "RFL LED",
          description: "RFL LED",
          createdAt: "04 March 2024",
        },
      ])
    );
    // Fetch data from API
    dispatch(
      storeSubCategories([
        {
          id: "1",
          image:
            "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
          subCategory: "Transform LED",
          mainCategory: "Transform LED",
          totalItems: "TRF LED",
          createdAt: "04 March 2024",
        },
      ])
    );
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="main-categories" />}></Route>
      <Route
        path="/main-categories"
        element={<MainCategories></MainCategories>}
      ></Route>
      <Route
        path="/main-categories/add"
        element={<AddMainCategory></AddMainCategory>}
      ></Route>
      <Route
        path="sub-categories"
        element={<SubCategories></SubCategories>}
      ></Route>
      <Route
        path="/sub-categories/add"
        element={<AddSubCategory></AddSubCategory>}
      ></Route>
    </Routes>
  );
}
