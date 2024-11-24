import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const a: any = localStorage.getItem("token");
  const b = JSON.parse(a);
  // const { userInfo } = useSelector((state: any) => state.auth);

  return b?.email ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
