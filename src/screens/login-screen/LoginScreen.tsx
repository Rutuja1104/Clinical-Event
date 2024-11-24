import React, { useEffect, useState } from "react";
import {
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Checkbox,
} from "@mui/material";
import {
  backgroundImage,
  eventEHRLogo,
  jamboreeImage,
  jamboreeImage2,
  jamboreeImage3,
  jamboreeImage4,
  jamboreeImage5,
  jamboreeImage6,
} from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import useDeviceType from "../../custom-hooks/DeviceType";
import Carousel from "../../component-lib/Molecules/login-carousel/Carousel";
import { validateEmail } from "../../utils/validateEmail";
import { validatePassword } from "../../utils/validatePassword";
import { useDispatch } from "react-redux";
import { login } from "./LoginSaga";
const LoginScreen = () => {
  const a: any = localStorage.getItem("token");
  const b = JSON.parse(a);
  const images = [
    jamboreeImage,
    jamboreeImage2,
    jamboreeImage3,
    jamboreeImage4,
    jamboreeImage5,
    jamboreeImage6,
  ];
  const dispatch = useDispatch();
  const deviceType = useDeviceType();
  const showOnlyForLaptopScreen =
    deviceType !== "mobile" &&
    deviceType !== "tablet" &&
    deviceType !== "small-tablet";
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  // Error state
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (b?.email) {
      navigate("/dashboard");
    }
  }, [b?.email, navigate]);

  const isButtonDisabled =
    loginCredentials?.email && loginCredentials?.password;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // Handle form submission
  const submitHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    // Reset error messages
    setErrors({ email: "", password: "" });

    // Validate inputs
    const isEmailValid = validateEmail(loginCredentials?.email);
    const isPasswordValid = validatePassword(loginCredentials.password);

    if (!isEmailValid) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email." }));
    }

    if (!isPasswordValid) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters long.",
      }));
    }

    // Proceed if inputs are valid
    if (isEmailValid && isPasswordValid) {
      try {
        dispatch(login({ userName: "Jayesh", password: "sevatkar" }));

        // Perform login logic here
        navigate("/dashboard");
      } catch (error: any) {
        console.log("error:", error);
        navigate("/dashboard");
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
          {/* <img
            src={jamboreeImage}
            alt="thumbnail"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          /> */}
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
          <div style={{ margin: "48px 60px", padding: "0" }}>
            <h1
              className="color-393939"
              style={{ fontSize: "28px", fontWeight: "600" }}
            >
              Login to your account
            </h1>
            <span
              className=" font-size-14px"
              style={{ fontWeight: "500", color: "#979797" }}
            >
              Welcome! Please enter your details.
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
              <div className="pb-3 py-3">
                <div
                  className=" font-size-14px"
                  style={{
                    color: "#727272",
                    fontWeight: "500",
                    marginBottom: "6px",
                  }}
                >
                  Password
                </div>
                <OutlinedInput
                  fullWidth
                  size="small"
                  name="password"
                  placeholder="Enter your password"
                  id="outlined-adornment-password"
                  error={!!errors.password}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label=""
                  onChange={(e) => {
                    setLoginCredentials((prevData) => ({
                      ...prevData,
                      password: e?.target?.value,
                    }));
                  }}
                />
                {errors.password && (
                  <div
                    style={{ color: "red", fontSize: "12px" }}
                    className="mt-1"
                  >
                    {errors.password}
                  </div>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "26px",
                  alignItems: "center",
                }}
              >
                <div className="flex items-center justify-center">
                  <Checkbox defaultChecked />
                  <div
                    className="font-size-14px color-393939"
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Remember me
                  </div>
                </div>
                <Link
                  to={"/forget-password"}
                  className="text-end font-size-14px color-005596"
                  style={{
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  Forgot Password?
                </Link>
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
                  Login
                </Button>
              </div>
              <div
                className="flex justify-center items-center mt-9 gap-2"
                onClick={() => {}}
              >
                <div
                  className="font-size-16 font-weight-500 color-005596 cursor-pointer"
                  onClick={() => {
                    navigate("/create-new-account");
                  }}
                >
                  Sign Up
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
