import { Outlet, Navigate } from "react-router-dom";
import { useRequest } from "../contexts/contextRequestUser";

export const PrivateRoute = () => {
  const { privateRoute } = useRequest();

  return privateRoute ? <Outlet /> : <Navigate to={"/"} />;
};
