import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useReactToPrint } from "react-to-print";
import { jamboree2027PreviewLogo } from "../../assets";
import Heading from "../../component-lib/Atoms/heading/EventEHRHeading";
import Table from "../../component-lib/Organisms/table/EventEHRTable";
import EventEHRCheckbox from "../../component-lib/Molecules/checkbox/EventEHRCheckbox";
import Button from "../../component-lib/Molecules/button/Button";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    width: "650px", // Set your custom width here
    maxWidth: "none", // Prevents Material-UI from overriding your width
  },
}));

interface DischargeFormPreviewModelProps {
  open: boolean;
  handleCloseModel: (event: any) => void;
}

export default function DischargeFormPreviewModel({
  open = false,
  handleCloseModel,
}: DischargeFormPreviewModelProps) {
  const headerTitleFrontStyle = {
    fontSize: "14px",
    fontWeight: 600,
    color: "#393939",
    marginBottom: "10px",
  };
  const labelFontStyle = {
    fontWeight: 500,
    color: "#727272",
    fontSize: "12px",
    marginRight: "8px",
  };
  const valueFontStyle = {
    fontWeight: 500,
    color: "#393939",
    fontSize: "12px",
    marginLeft: "8px",
  };
  const colonFontStyle = {
    fontWeight: "400",
    fontSize: "12px",
    color: "#393939",
  };

  const patientDetails = [
    { label: "Patient Name", value: "Andrew Roberts" },
    { label: "BSA ID", value: "1010210303" },
    { label: "Date of Visit", value: "13/11/2023" },
    { label: "Contact Number", value: "(480) 555-0103" },
    { label: "Home Camp", value: "Charlie Camp" },
    { label: "Unit Number", value: "A2452" },
  ];

  const incidentDetails = [
    { label: "Incident Date", value: "22/12/2023" },
    { label: "Incident Time", value: "-" },
    { label: "Incident Location", value: "Base Camp 1" },
    { label: "Witness Name", value: "John Krensky" },
    { label: "Witness Contact Number", value: "(480) 555-0103" },
  ];

  const ICDCodeColumns = [
    {
      field: "srNo",
      label: <div>ICD 10 Code</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">1</p>;
      },
    },
    {
      field: "details",
      label: <div className="">Details</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">Headache</p>;
      },
    },
  ];

  const contentRef = React.useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const handleClose = () => {
    handleCloseModel(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div
          className="flex justify-between items-center"
          style={{ padding: "12px 16px" }}
        >
          <div
            // sx={{ m: 0, p: 2, visibility: "hidden" }}
            className="font-weight-500 font-size-18px"
            style={{ visibility: "hidden" }}
          >
            Modal title
          </div>
          <div>
            {/* <button onClick={() => reactToPrintFn()}>Print</button> */}
            <Button
              label="Print"
              onClickCb={() => reactToPrintFn()}
              variant="outlined"
              style={{ padding: "5px 10px" }}
            />

            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={(theme) => ({
                color: theme.palette.grey[500],
              })}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>

        <DialogContent dividers>
          <div
            ref={contentRef}
            style={{
              //   width: "42%",
              // textAlign: "center",
              //   position: "relative",
              //   left: "25%",
              //   border: "1px solid red",
              height: "-webkit-fill-available",
              overflow: "auto",
            }}
          >
            {/* Heading */}
            <header className="flex items-center justify-between p-3">
              <div className="flex items-center gap-2">
                <img src={jamboree2027PreviewLogo} alt="jamboree logo" />
                <div className="font-weight-900 font-size-20px color-393939">
                  JAMBOREE 2026
                </div>
              </div>

              <div className="font-weight-650 font-size-18px color-005596">
                Event EHR
              </div>
            </header>
            {/* Type */}
            <div className="background-005596 color-FFFFFF font-weight-500 font-size-14px text-align-center p-1">
              Self Care Visit
            </div>
            {/* Patient Details */}
            <div className="pt-3 pl-4 pb-4 pr-4">
              <Heading
                title="Patient Details"
                customStyle={headerTitleFrontStyle}
              />
              {/* <div>Patient Details</div> */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  rowGap: "10px",
                }}
              >
                {patientDetails?.map((data, index) => (
                  <div key={index}>
                    <span style={labelFontStyle}>{data?.label}</span>
                    <span style={colonFontStyle}>:</span>
                    <span style={valueFontStyle}>{data?.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <hr />
            {/* Incident Details */}
            <div className="pt-3 pl-4 pb-4 pr-4">
              <Heading
                title="Incident Details"
                customStyle={headerTitleFrontStyle}
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  rowGap: "10px",
                }}
              >
                {incidentDetails?.map((data, index) => (
                  <div key={index}>
                    <span style={labelFontStyle}>{data?.label}</span>
                    <span style={colonFontStyle}>:</span>
                    <span style={valueFontStyle}>{data?.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <hr />
            {/* Chief Complaint */}
            <div className="pt-3 pl-4 pb-4 pr-4">
              <Heading
                title="Chief Complaint"
                customStyle={headerTitleFrontStyle}
              />
              <div className="font-weight-500 color-979797 font-size-12px">
                Lorem ipsum dolor sit amet consectetur. Enim vestibulum a tortor
                egestas dui sit. Magna nunc a facilisis pulvinar orci.
                Ullamcorper pellentesque mauris cras nulla nec vehicula. Morbi
                dictum vel sed iaculis sit mattis blandit rhoncus.
              </div>
            </div>
            {/* Diagnosis */}
            <div className="pt-3 pl-4 pb-4 pr-4">
              <Heading title="Diagnosis" customStyle={headerTitleFrontStyle} />
              <div>
                <Table columns={ICDCodeColumns} rows={[2, 3]} />
              </div>
            </div>
            {/* Checkbox */}
            <div className="pt-3 pl-4 pb-4 pr-4">
              <EventEHRCheckbox
                customLabelStyle={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#979797",
                }}
                optionList={[
                  {
                    label:
                      "I confirm that all of the above care and observations have been provided and documented as per the care plan.",
                    value: "yes",
                  },
                ]}
              />
            </div>
            {/* Signature */}
            <div className="pt-3 pl-4 pb-4 pr-4 text-end flex justify-end important-content">
              <div
                style={{
                  display: "flex, border:'1px solid red",
                  background: "#F4F4F4",
                  padding: "44px 71.5px 4px 71.5px",
                }}
                className="text-center border-radius-8px"
              >
                <div className="font-size-8px font-weight-400 color-565656">
                  Clinician Name
                </div>
                <div className="font-weight-500 font-size-12px color-565656 mt-1">
                  Signature
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
