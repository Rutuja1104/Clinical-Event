import React, { useState } from "react";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import useDeviceType from "../../custom-hooks/DeviceType";
import Carousel from "../../component-lib/Molecules/login-carousel/Carousel";
import { validatePassword } from "../../utils/validatePassword";
const SetNewPasswordScreen = () => {
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

  const [showPassword, setShowPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const isButtonDisabled = passwords.password && passwords.confirmPassword;

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
    setErrors({ password: "", confirmPassword: "" });

    // Validate password and confirm password
    const isPasswordValid = validatePassword(passwords.password);
    const isPasswordsMatch = passwords.password === passwords.confirmPassword;

    if (!isPasswordValid) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters long.",
      }));
    }

    if (!isPasswordsMatch) {
      setErrors((prev) => ({
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
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: showOnlyForLaptopScreen ? "2fr 3fr" : "1fr",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
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
              Set New Password
            </h1>
            <span
              className=" font-size-14px"
              style={{ fontWeight: "500", color: "#979797" }}
            >
              Please enter your new password and confirm it.
            </span>
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
                  New Password
                </div>
                <OutlinedInput
                  fullWidth
                  size="small"
                  name="password"
                  placeholder="Enter new password"
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
                  onChange={(e) =>
                    setPasswords((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
                {errors.password && (
                  <div style={{ color: "red", fontSize: "12px" }}>
                    {errors.password}
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
                  placeholder="Confirm your password"
                  id="outlined-adornment-confirm-password"
                  error={!!errors.confirmPassword}
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
                    setPasswords((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                />
                {errors.confirmPassword && (
                  <div style={{ color: "red", fontSize: "12px" }}>
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              <div className="text-center" style={{ marginTop: "24px" }}>
                <Button
                  className="text-transformation"
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={!isButtonDisabled}
                  style={{
                    background: isButtonDisabled && "#005596",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    borderRadius: "8px",
                    textTransform: "none",
                  }}
                  onClick={submitHandler}
                >
                  Set Password
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetNewPasswordScreen;
