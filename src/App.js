import logo from "./logo.svg";
import "./App.css";
import { Login } from "./login/Login";
import { Pages } from "./pages/Pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { Button } from "@mui/material";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="login" />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/pages" element={<Pages></Pages>}></Route>
      </Routes>
    </div>
  );
}

export default App;
