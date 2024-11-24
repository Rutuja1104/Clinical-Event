import React, { useState } from "react";
import {
  TextField,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
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
  leftDirectionIcon,
  leftDisableDirIcon,
} from "../../assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useDeviceType from "../../custom-hooks/DeviceType";
import Carousel from "../../component-lib/Molecules/login-carousel/Carousel";
import { validateEmail } from "../../utils/validateEmail";
import { validatePassword } from "../../utils/validatePassword";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const CreateNewAccount = () => {
  //   const a: any = localStorage.getItem("token");
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

  const [showPassword, setShowPassword] = useState(false);
  const [stepSelected, setStepSelected] = useState(1);
  //  STEP 1
  const [signUpStep1Data, setSignUpStep1Data] = useState({
    fullName: "",
    email: "",
  });
  //  STEP 2
  const [signUpStep2Data, setSignUpStep2Data] = useState({
    password: "",
    confirmPassword: "",
  });
  // Error STEP 1
  const [step1Errors, setStep1Errors] = useState({
    fullName: "",
    email: "",
  });
  // Error STEP 2
  const [step2Errors, setStep2Errors] = useState({
    password: "",
    confirmPassword: "",
  });

  const isStep1ButtonDisabled =
    signUpStep1Data?.email && signUpStep1Data?.fullName;
  const isStep2ButtonDisabled =
    signUpStep2Data?.password && signUpStep2Data?.confirmPassword;

  // Handle form submission
  const submitHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    // Reset error messages
    setStep2Errors({ password: "", confirmPassword: "" });

    // Validate password and confirm password
    const isPasswordValid = validatePassword(signUpStep2Data.password);
    const isPasswordsMatch =
      signUpStep2Data.password === signUpStep2Data.confirmPassword;

    if (!isPasswordsMatch) {
      setStep2Errors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match.",
      }));
    }

    // Proceed if passwords are valid and match
    if (isPasswordValid && isPasswordsMatch) {
      try {
        // Handle setting new password logic
        toast.success("Password set successfully");
        // navigate("/dashboard");
      } catch (error: any) {
        toast.error(error?.data?.message || error.error);
      }
    }

    // Proceed if inputs are valid
    if (isPasswordValid && isPasswordsMatch) {
      try {
        // dispatch(login({ userName: "Jayesh", password: "sevatkar" }));

        // Perform login logic here
        navigate("/dashboard");
      } catch (error: any) {
        console.log("error:", error);
        navigate("/dashboard");
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  const handleContinueClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    // Reset error messages
    setStep1Errors({ email: "", fullName: "" });

    // Validate inputs
    const isEmailValid = validateEmail(signUpStep1Data?.email);
    //  const isPasswordValid = validatePassword(signUpStep1Data.fullName);

    if (!isEmailValid) {
      setStep1Errors((prev) => ({
        ...prev,
        email: "Please enter a valid email.",
      }));
    }

    if (signUpStep1Data?.fullName?.trim()?.length === 0) {
      setStep1Errors((prev) => ({
        ...prev,
        fullName: "Please enter a valid full name.",
      }));
    }

    // Proceed if inputs are valid
    if (isEmailValid && signUpStep1Data?.fullName?.trim()?.length !== 0) {
      setStepSelected(2);
    }
  };

  const handleKeyPress = (event: any) => {
    // Prevent numbers from being typed
    if (/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

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
          <div style={{ margin: "48px 60px", padding: "0" }}>
            <h1
              className="color-393939"
              style={{ fontSize: "28px", fontWeight: "600" }}
            >
              Create Your Account
            </h1>
            <span
              className=" font-size-14px"
              style={{ fontWeight: "500", color: "#979797" }}
            >
              Enter following details to create account
            </span>
            {/* STEP-1 */}
            {stepSelected === 1 && (
              <div>
                {/* FULL NAME TEXTFIELD */}
                <div className="py-3">
                  <div
                    className=" font-size-14px"
                    style={{
                      color: "#727272",
                      fontWeight: "500",
                      marginBottom: "6px",
                    }}
                  >
                    Full Name
                  </div>
                  <TextField
                    placeholder="Enter your name"
                    id="outlined-basic"
                    type="text"
                    label=""
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!step1Errors.fullName}
                    onKeyDown={handleKeyPress}
                    onChange={(e) => {
                      setSignUpStep1Data((prevData) => ({
                        ...prevData,
                        fullName: e?.target?.value,
                      }));
                    }}
                  />
                  {step1Errors?.fullName && (
                    <div
                      className="mt-1"
                      style={{ color: "red", fontSize: "12px" }}
                    >
                      {step1Errors?.fullName}
                    </div>
                  )}
                </div>
                {/* EMAIL TEXTFIELD */}
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
                    error={!!step1Errors.email}
                    onChange={(e) => {
                      setSignUpStep1Data((prevData) => ({
                        ...prevData,
                        email: e?.target?.value,
                      }));
                    }}
                  />
                  {step1Errors?.email && (
                    <div
                      className="mt-1"
                      style={{ color: "red", fontSize: "12px" }}
                    >
                      {step1Errors?.email}
                    </div>
                  )}
                </div>
                {/* CONTINUE BUTTON */}
                <div className="text-center" style={{ marginTop: "24px" }}>
                  <Button
                    className="text-transformation"
                    type="submit"
                    fullWidth
                    variant="text"
                    disabled={isStep1ButtonDisabled ? false : true}
                    style={{
                      background: "white",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      borderRadius: "8px",
                      textTransform: "none",
                    }}
                    endIcon={
                      isStep1ButtonDisabled ? (
                        <img src={leftDirectionIcon} />
                      ) : (
                        <img src={leftDisableDirIcon} />
                      )
                    }
                    onClick={handleContinueClick}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {/* STEP-2 */}
            {stepSelected === 2 && (
              <div>
                {/* New Password */}
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
                    error={!!step2Errors.password}
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
                    onChange={(e) =>
                      setSignUpStep2Data((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                  {step2Errors.password && (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {step2Errors.password}
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="pb-3 py-3">
                  <div
                    className=" font-size-14px"
                    style={{
                      color: "#727272",
                      fontWeight: "500",
                      marginBottom: "6px",
                    }}
                  >
                    Confirm Password
                  </div>
                  <OutlinedInput
                    fullWidth
                    size="small"
                    name="confirmPassword"
                    placeholder="Enter Confirm Password"
                    id="outlined-adornment-confirm-password"
                    error={!!step2Errors.confirmPassword}
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
                    onChange={(e) =>
                      setSignUpStep2Data((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      }))
                    }
                  />
                  {step2Errors.confirmPassword && (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {step2Errors.confirmPassword}
                    </div>
                  )}
                </div>

                <div className="text-center" style={{ marginTop: "24px" }}>
                  <Button
                    className="text-transformation"
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={!isStep2ButtonDisabled}
                    style={{
                      background: isStep2ButtonDisabled && "#005596",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      borderRadius: "8px",
                      textTransform: "none",
                    }}
                    onClick={submitHandler}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewAccount;
