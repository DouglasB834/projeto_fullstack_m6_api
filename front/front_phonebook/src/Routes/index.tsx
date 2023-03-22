import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Login";
import { Register } from "../pages/Register";

export const MainRouter = () => (
  <Routes>
    <Route path={"/"} element={<HomePage />} />
    <Route path={"/register"} element={<Register />} />
  </Routes>
);
