import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard.tsx";
import { HomePage } from "../pages/homepage";
import { PrivateRoute } from "./Private";

export const MainRouter = () => (
  <Routes>
    <Route path={"/"} element={<HomePage />} />
    <Route path={"/home"} element={<PrivateRoute />}>
      <Route path={"/home"} element={<Dashboard />}></Route>
    </Route>
  </Routes>
);
