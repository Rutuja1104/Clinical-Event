import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import Heading from "../../Atoms/heading/EventEHRHeading";
import EditProfile from "./EditProfile";
import { BorderAllRounded, Height } from "@mui/icons-material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    BorderAllRounded: "8px",
    Height: "436px",
    width: "708px", // Set your custom width here
    maxWidth: "none", // Prevents Material-UI from overriding your width
  },
}));

interface EventEHREditProfileDialogProps {
  isOpen: boolean;
  dialogHeading: string;
  handleClose: () => void;
}

export default function 
EventEHREditProfileDialog({
  isOpen = false,
  handleClose,
  dialogHeading = "Your Heading Here...",
}: EventEHREditProfileDialogProps) {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <div
          className="flex justify-between items-center rounded-lg"
          style={{ margin: "14px 24px" }}
        >
          <Heading title={dialogHeading} />
          <div onClick={handleClose} className="cursor-pointer">
            <CloseIcon />
          </div>
        </div>

        <DialogContent dividers style={{ padding: "16px 24px 24px 24px", borderRadius: "8px" }}>
          <EditProfile
            handleOnSubmittedData={(formData) => {
              console.log("Submitted Edited Data:", formData);
            }}
          />
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
