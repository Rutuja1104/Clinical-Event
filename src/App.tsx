import React, { useEffect } from "react";
import "./App.css";
import "./styles/commonFontSizes.css";
import "./styles/commonColors.css";
import "./styles/commonStyle.css";
import "./styles/commonFontWeights.css";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./component-lib/Molecules/loader/Loader";
import EventEMRResponsiveAppBar from "./component-lib/Organisms/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { componentKey, setIsLoggedIn } from "./screens/login-screen/LoginSlice";

function App() {
  const dispatch = useDispatch();
  const path = window?.location?.pathname?.split("/")[1];
  const { isLoggedIn } = useSelector((state: any) => state[componentKey]);
  const token = localStorage.getItem("token");
  const b: { email?: string } | null = token ? JSON.parse(token) : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (b?.email) {
      dispatch(setIsLoggedIn(true));
      navigate(path ? `/${path}` : "/dashboard");
    }
  }, [b?.email, navigate, path, isLoggedIn, dispatch]);

  return (
    <>
      {isLoggedIn && (
        <EventEMRResponsiveAppBar
          handlePageChange={(page: any) => {
            switch (page) {
              case "Dashboard":
                navigate("/dashboard");
                break;
              case "Reports":
                navigate("/reports");
                break;
              case "Patient":
                navigate("/patient");
                break;
              case "Settings":
                navigate("/settings");
                break;
              default:
                console.warn("Unknown page:", page);
                break;
            }
          }}
        />
      )}
      <main style={{ background: "#F1F1F1", height: "calc(100vh - 90px)" }}>
        <div>
          <Outlet />
        </div>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
      <Loader />
    </>
  );
}

export default App;
