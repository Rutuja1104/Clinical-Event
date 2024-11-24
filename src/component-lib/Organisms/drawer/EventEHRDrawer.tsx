import { Drawer as DrawerWrapper } from "@mui/material";
import { ReactNode } from "react";

type DrawerPropsType = {
  open: boolean;
  onCloseCb: () => void;
  children?: ReactNode;
  style?: Record<string, string>;
};

const Drawer = ({ open, onCloseCb, children, style }: DrawerPropsType) => {
  return (
    <DrawerWrapper open={open} onClose={onCloseCb} anchor={"right"} sx={style}>
      {children}
    </DrawerWrapper>
  );
};

export default Drawer;
