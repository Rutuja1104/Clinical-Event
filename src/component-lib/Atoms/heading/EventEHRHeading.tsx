import React from "react";

type HeadingPropsType = {
  title: string;
  customStyle?: any;
  isRequired?: boolean;
  onClickCb?: () => void;
};

const Heading = ({
  title = "Your Heading Here...",
  customStyle = {
    fontSize: "18px",
    fontWeight: 600,
    fontFamily: "Inter",
    color: "#212D30",
  },
  isRequired = false,
  onClickCb,
}: HeadingPropsType) => {
  const defaultStyle = {
    fontSize: "18px",
    fontWeight: 600,
    fontFamily: "Inter",
    color: "#212D30",
  };

  return (
    <div onClick={onClickCb} style={{ ...defaultStyle, ...customStyle }}>
      {title} {isRequired && <span style={{ color: "#CE0718" }}>*</span>}
    </div>
  );
};

export default Heading;
