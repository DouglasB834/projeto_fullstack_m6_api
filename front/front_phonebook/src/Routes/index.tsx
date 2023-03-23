import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { Register } from "../pages/Register";

export const MainRouter = () => (
  <Routes>
    <Route path={"/"} element={<HomePage />} />
    <Route path={"/register"} element={<Register />} />
  </Routes>
);
