import { ReactNode } from "react";

type WrapperCradPropsType = {
  background?: string;
  children?: ReactNode;
  customClasses?: string;
  customStyle?: any;
};

const WrapperCard = ({
  background = "white",
  children,
  customClasses = "",
  customStyle = {},
}: WrapperCradPropsType) => {
  return (
    <div
      className={`bg-${background} min-w-[200px] ${customClasses}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

export default WrapperCard;
