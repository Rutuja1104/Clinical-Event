import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import {
  backgroundImage,
  eventEHRLogo,
  jamboreeImage,
  jamboreeImage2,
  jamboreeImage3,
  jamboreeImage4,
  jamboreeImage5,
  jamboreeImage6,
  rightDirectionIcon,
} from "../../assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useDeviceType from "../../custom-hooks/DeviceType";
import Carousel from "../../component-lib/Molecules/login-carousel/Carousel";
import { validateEmail } from "../../utils/validateEmail";
const ForgetPasswordScreen = () => {
  const images = [
    jamboreeImage,
    jamboreeImage2,
    jamboreeImage3,
    jamboreeImage4,
    jamboreeImage5,
    jamboreeImage6,
  ];
  const deviceType = useDeviceType();
  const showOnlyForLaptopScreen =
    deviceType !== "mobile" &&
    deviceType !== "tablet" &&
    deviceType !== "small-tablet";
  const navigate = useNavigate();

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
  });
  // Error state
  const [errors, setErrors] = useState({
    email: "",
  });

  const isButtonDisabled = loginCredentials?.email;

  // Handle form submission
  const submitHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    // Reset error messages
    setErrors({ email: "" });

    // Validate inputs
    const isEmailValid = validateEmail(loginCredentials?.email);

    if (!isEmailValid) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email." }));
    }

    // Proceed if inputs are valid
    if (isEmailValid) {
      try {
        // Perform login logic here
        navigate("/set-new-password");
      } catch (error: any) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: showOnlyForLaptopScreen ? "2fr 3fr" : "1fr",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`, // Add your image path here
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center",
      }}
    >
      {showOnlyForLaptopScreen && (
        <div>
          <Carousel images={images} />
        </div>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        <img src={eventEHRLogo} alt="eventEHRLogo" />
        <div
          className=""
          style={{
            borderRadius: "10px",
            width: deviceType === "mobile" ? "90%" : "67%",
            border: "1px solid transparent",
            boxShadow: "0px 0px 25px 0px #0000001A",
            background: "white",
          }}
        >
          <div
            style={{
              margin: deviceType === "mobile" ? "48px 23px" : "48px 60px",
              padding: "0",
            }}
          >
            <h1
              className="color-393939"
              style={{ fontSize: "28px", fontWeight: "600" }}
            >
              Forgot Password
            </h1>
            <span
              className=" font-size-14px"
              style={{ fontWeight: "500", color: "#979797" }}
            >
              Enter your email id to reset your password
            </span>
            <div>
              <div className="py-3">
                <div
                  className=" font-size-14px"
                  style={{
                    color: "#727272",
                    fontWeight: "500",
                    marginBottom: "6px",
                  }}
                >
                  Email
                </div>
                <TextField
                  placeholder="Enter your email"
                  id="outlined-basic"
                  type="email"
                  label=""
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.email}
                  onChange={(e) => {
                    setLoginCredentials((prevData) => ({
                      ...prevData,
                      email: e?.target?.value,
                    }));
                  }}
                />
                {errors?.email && (
                  <div
                    className="mt-1"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    {errors?.email}
                  </div>
                )}
              </div>

              <div className="text-center" style={{ marginTop: "24px" }}>
                <Button
                  className="text-transformation"
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isButtonDisabled ? false : true}
                  style={{
                    background: isButtonDisabled && "#005596",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    borderRadius: "8px",
                    textTransform: "none",
                  }}
                  onClick={submitHandler}
                >
                  Send Reset Link
                </Button>
              </div>
              <div
                className="flex justify-center items-center mt-6 gap-2"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <img
                  src={rightDirectionIcon}
                  alt={"right-dir"}
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/login");
                  }}
                />
                <div
                  className="font-size-16 font-weight-500 color-005596 cursor-pointer"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Back to login
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordScreen;
