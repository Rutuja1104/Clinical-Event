// Loader.js
import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { componentKey } from "./LoaderSlice";

const Loader = () => {
  const { isLoading } = useSelector((state: any) => state[componentKey]);

  if (!isLoading) {
    return null; // Do not render anything if not loading
  }

  const styles: any = {
    loader: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000, // Make sure the loader appears on top of everything
    },
  };

  return (
    <div style={styles.loader}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
