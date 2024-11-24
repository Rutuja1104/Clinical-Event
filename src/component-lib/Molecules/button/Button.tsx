import { Button as ButtonWrapper } from "@mui/material";
import { ReactNode } from "react";
import { BUTTON_VARIANTS } from "./constants";

type ButtonPropsType = {
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  variant: "contained" | "outlined" | "text" | any;
  color?: string;
  style?: Record<string, string>;
  type?: "button" | "submit" | "reset" | undefined;
  onClickCb: (e: any) => void;
  children?: ReactNode;
};

const Button = ({
  children,
  type = "button",
  label = "",
  variant = "contained",
  startIcon,
  endIcon,
  disabled = false,
  color,
  style = {},
  onClickCb = () => {
    /* no-op */
  },
}: ButtonPropsType) => {
  const getVariantStyle = () => {
    let variantStyle;
    switch (variant) {
      case BUTTON_VARIANTS.CONTAINED:
        variantStyle = {
          backgroundColor: color ? color : "#005596",
          color: "#FFFFFF",
          border: "1px solid #005596",
          borderRadius: "4px",
          fontWeight: 500,
          padding: "10px 16px",
          fontFamily: "Inter",
        };
        break;
      case BUTTON_VARIANTS.OUTLINED:
        variantStyle = {
          backgroundColor: color ? color : "#E4F3FF",
          color: "#005596",
          border: "1px solid #005596",
          borderRadius: "4px",
          fontWeight: 500,
          padding: "10px 16px",
          fontFamily: "Inter",
        };
        break;
      case BUTTON_VARIANTS.TEXT:
        variantStyle = {
          color: "#005596",
          fontWeight: 500,
          padding: "10px 16px",
          fontSize: "12px",
          fontFamily: "Inter",
        };
        break;
      default:
        variantStyle = {
          backgroundColor: color ? color : "#005596",
          color: "#FFFFFF",
          border: "1px solid #005596",
          borderRadius: "4px",
          fontWeight: 500,
          padding: "10px 16px",
          fontFamily: "Inter",
        };
    }
    return variantStyle;
  };

  return (
    <ButtonWrapper
      type={type}
      variant={variant}
      startIcon={startIcon ? startIcon : undefined}
      endIcon={endIcon ? endIcon : undefined}
      disabled={disabled}
      style={{ ...getVariantStyle(), ...style, textTransform: "none" }}
      onClick={onClickCb}
    >
      {label}
    </ButtonWrapper>
  );
};

export default Button;
