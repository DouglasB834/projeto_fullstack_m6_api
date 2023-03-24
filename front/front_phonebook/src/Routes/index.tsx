import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard.tsx";
import { HomePage } from "../pages/homepage";

export const MainRouter = () => (
  <Routes>
    <Route path={"/"} element={<HomePage />} />
    <Route path={"/home"} element={<Dashboard />}>
      {/* depois tem como passar nome do user no url  navigate(`/dashboard/user/${user.name ou id}`); */}
    </Route>
  </Routes>
);
