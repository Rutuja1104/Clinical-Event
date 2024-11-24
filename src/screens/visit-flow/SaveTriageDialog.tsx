import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Input from "../../component-lib/Atoms/Input/Input";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import Button from "../../component-lib/Molecules/button/Button";
import { TRIAGE_DATA } from "./constant";
import * as Yup from "yup";
import useDeviceType from "../../custom-hooks/DeviceType";
import EventEHRRadioButton from "../../component-lib/Molecules/radioButton/EventEHRRadioButton";
import SelectDropdown from "../../component-lib/Atoms/Select/Select";
import { TYPE_OF_CARE } from "../../component-lib/Organisms/create-visit-dialog/constants";
import Heading from "../../component-lib/Atoms/heading/EventEHRHeading";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    width: "708px", // Set your custom width here
    maxWidth: "none", // Prevents Material-UI from overriding your width
  },
}));

interface SaveTriageDialogProps {
  open: boolean;
  handleCloseDialog: () => void;
}

export default function SaveTriageDialog({
  open = false,
  handleCloseDialog,
}: SaveTriageDialogProps) {
  const deviceType = useDeviceType();
  const [selectedCare, setSelectedCare] = React.useState("woundCare");
  const validationSchema = Yup.object().shape({
    [TRIAGE_DATA?.TEMPERATURE]: Yup.number().required(
      "Temperature complaint is required"
    ),
    [TRIAGE_DATA.OXYGEN_SATURATION]: Yup.number().required(
      "Oxygen saturation is required"
    ),

    [TRIAGE_DATA.RESPIRATION_RATE]: Yup.number().required(
      "Respiration is required"
    ),
    [TRIAGE_DATA.HEART_RATE]: Yup.number().required("Heart rate is required"),
    [TRIAGE_DATA.BLOOD_PRESSURE]: Yup.number().required(
      "blood pressure is required"
    ),
    [TRIAGE_DATA.BLOOD_PRESSURE2]: Yup.number().required(
      "blood pressure is required"
    ),
    [TRIAGE_DATA.CARE_VALUE]: Yup.string().required("Please select value"),
  });

  const handleClose = () => {
    handleCloseDialog();
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Formik
          initialValues={{
            [TRIAGE_DATA.TEMPERATURE]: "",
            [TRIAGE_DATA.OXYGEN_SATURATION]: "",
            [TRIAGE_DATA.RESPIRATION_RATE]: "",
            [TRIAGE_DATA.HEART_RATE]: "",
            [TRIAGE_DATA.BLOOD_PRESSURE]: "",
            [TRIAGE_DATA.BLOOD_PRESSURE2]: "",
            [TRIAGE_DATA.CARE]: "",
            [TRIAGE_DATA.CARE_VALUE]: "",
          }}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            try {
              console.log("values:", values);

              // handleOnSubmittedData && handleOnSubmittedData(values);
              // Handle form data here
              // If needed, call an API or further process the values here
            } catch (error) {
              console.log(error);
            } finally {
              setSubmitting(false); // Reset submitting state
            }
          }}
        >
          {({
            errors,
            values,
            touched,
            isValid,
            dirty,
            setFieldValue,
            handleBlur,
            handleSubmit,
          }) => {
            return (
              <Form
                onSubmit={handleSubmit}
                className="h-full flex flex-col justify-between"
              >
                <DialogTitle
                  sx={{ m: 0, p: 2, fontWeight: 600, fontSize: "18px" }}
                  id="customized-dialog-title"
                >
                  Triage
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={(theme) => ({
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                  })}
                >
                  <CloseIcon />
                </IconButton>
                <hr />
                {/* MAIN CONTENT */}
                <DialogContent
                  sx={{
                    height: deviceType === "mobile" ? "50vh" : "fit-content",
                  }}
                >
                  <div>
                    <div
                      style={{
                        padding: "0px 8px",
                        display: "grid",
                        gridTemplateColumns:
                          deviceType === "mobile" ? "1fr" : "1fr 1fr",
                        rowGap: "24px",
                        columnGap: "16px",
                      }}
                    >
                      {/* TEMPERATURE TEXTFIELD */}
                      <Input
                        label="Temperature"
                        endIcon={"F"}
                        size="small"
                        name={TRIAGE_DATA.TEMPERATURE}
                        value={values[TRIAGE_DATA.TEMPERATURE]}
                        onChangeCb={(e) => {
                          setFieldValue(
                            TRIAGE_DATA.TEMPERATURE,
                            e.target.value
                          );
                        }}
                        onBlur={handleBlur}
                        error={
                          touched[TRIAGE_DATA.TEMPERATURE] &&
                          Boolean(errors[TRIAGE_DATA.TEMPERATURE])
                        }
                        helperText={
                          touched[TRIAGE_DATA.TEMPERATURE]
                            ? errors[TRIAGE_DATA.TEMPERATURE]
                            : undefined
                        }
                      />
                      {/* OXYGEN SATURATION TEXTFIELD */}
                      <Input
                        label="Oxygen Saturation"
                        endIcon={"%"}
                        name={TRIAGE_DATA.OXYGEN_SATURATION}
                        value={values[TRIAGE_DATA.OXYGEN_SATURATION]}
                        onChangeCb={(e) => {
                          setFieldValue(
                            TRIAGE_DATA.OXYGEN_SATURATION,
                            e.target.value
                          );
                        }}
                        onBlur={handleBlur}
                        size="small"
                        error={
                          touched[TRIAGE_DATA.OXYGEN_SATURATION] &&
                          Boolean(errors[TRIAGE_DATA.OXYGEN_SATURATION])
                        }
                        helperText={
                          touched[TRIAGE_DATA.OXYGEN_SATURATION]
                            ? errors[TRIAGE_DATA.OXYGEN_SATURATION]
                            : undefined
                        }
                      />
                      {/* HEART RATE TEXTFIELD */}

                      <Input
                        label="Heart Rate"
                        endIcon={"bpm"}
                        name={TRIAGE_DATA.HEART_RATE}
                        value={values[TRIAGE_DATA.HEART_RATE]}
                        onChangeCb={(e) => {
                          setFieldValue(TRIAGE_DATA.HEART_RATE, e.target.value);
                        }}
                        onBlur={handleBlur}
                        size="small"
                        error={
                          touched[TRIAGE_DATA.HEART_RATE] &&
                          Boolean(errors[TRIAGE_DATA.HEART_RATE])
                        }
                        helperText={
                          touched[TRIAGE_DATA.HEART_RATE]
                            ? errors[TRIAGE_DATA.HEART_RATE]
                            : undefined
                        }
                      />
                      {/* RESPIRATION RATE TEXTFIELD */}

                      <Input
                        label="Respiration Rate"
                        endIcon={"breath per minute"}
                        name={TRIAGE_DATA.RESPIRATION_RATE}
                        value={values[TRIAGE_DATA.RESPIRATION_RATE]}
                        onChangeCb={(e) => {
                          setFieldValue(
                            TRIAGE_DATA.RESPIRATION_RATE,
                            e.target.value
                          );
                        }}
                        onBlur={handleBlur}
                        size="small"
                        error={
                          touched[TRIAGE_DATA.RESPIRATION_RATE] &&
                          Boolean(errors[TRIAGE_DATA.RESPIRATION_RATE])
                        }
                        helperText={
                          touched[TRIAGE_DATA.RESPIRATION_RATE]
                            ? errors[TRIAGE_DATA.RESPIRATION_RATE]
                            : undefined
                        }
                      />
                      {/* BLOOD PRESSURE TEXTFIELD */}
                      <Input
                        label="Blood Pressure"
                        placeholder="Systolic"
                        endIcon={"mmhg"}
                        name={TRIAGE_DATA.BLOOD_PRESSURE}
                        value={values[TRIAGE_DATA.BLOOD_PRESSURE]}
                        onChangeCb={(e) => {
                          setFieldValue(
                            TRIAGE_DATA.BLOOD_PRESSURE,
                            e.target.value
                          );
                        }}
                        onBlur={handleBlur}
                        size="small"
                        error={
                          touched[TRIAGE_DATA.BLOOD_PRESSURE] &&
                          Boolean(errors[TRIAGE_DATA.BLOOD_PRESSURE])
                        }
                        helperText={
                          touched[TRIAGE_DATA.BLOOD_PRESSURE]
                            ? errors[TRIAGE_DATA.BLOOD_PRESSURE]
                            : undefined
                        }
                      />
                      {/* BLOOD PRESSURE 2 TEXTFIELD */}
                      <Input
                        label="Blood Pressure"
                        placeholder="Diastolic"
                        endIcon={"mmhg"}
                        name={TRIAGE_DATA.BLOOD_PRESSURE2}
                        value={values[TRIAGE_DATA.BLOOD_PRESSURE2]}
                        onChangeCb={(e) => {
                          setFieldValue(
                            TRIAGE_DATA.BLOOD_PRESSURE2,
                            e.target.value
                          );
                        }}
                        onBlur={handleBlur}
                        size="small"
                        error={
                          touched[TRIAGE_DATA.BLOOD_PRESSURE2] &&
                          Boolean(errors[TRIAGE_DATA.BLOOD_PRESSURE2])
                        }
                        helperText={
                          touched[TRIAGE_DATA.BLOOD_PRESSURE2]
                            ? errors[TRIAGE_DATA.BLOOD_PRESSURE2]
                            : undefined
                        }
                      />
                    </div>
                    <div className="ml-2 mr-2 mt-6 mb-4">
                      <EventEHRRadioButton
                        selectedValue="woundCare"
                        name=""
                        labelCustomStyle={{
                          marginLeft: "10px",
                          color: "#565656",
                        }}
                        optionList={[
                          { label: "Wound Care", value: "woundCare" },
                          { label: "Dehydration", value: "dehydration" },
                          { label: "Injury", value: "injury" },
                          { label: "Other", value: "other" },
                        ]}
                        handleOnChange={(value) => {
                          setFieldValue(TRIAGE_DATA.CARE_VALUE, "");
                          setSelectedCare(value);
                          setFieldValue(TRIAGE_DATA.CARE, value);
                        }}
                      />
                    </div>
                    <div>
                      {(selectedCare === "woundCare" ||
                        selectedCare === "dehydration" ||
                        selectedCare === "injury") && (
                        <div>
                          <Heading
                            title={
                              selectedCare === "woundCare"
                                ? "Wound Location"
                                : selectedCare === "dehydration"
                                  ? "Hydration Level"
                                  : selectedCare === "injury"
                                    ? "Injury Location"
                                    : ""
                            }
                            customStyle={{
                              fontWight: 500,
                              fontSize: "16px",
                              color: "#393939",
                              marginBottom: "12px",
                            }}
                          />
                          <SelectDropdown
                            label=""
                            // placeholder="Select Wound Location"
                            displayEmpty={true}
                            placeholderValue={
                              selectedCare === "woundCare"
                                ? "Select Wound Location"
                                : selectedCare === "dehydration"
                                  ? "Select Hydration Level"
                                  : selectedCare === "injury"
                                    ? "Select Injury Location"
                                    : "Enter Detail"
                            }
                            value={values[TRIAGE_DATA.CARE_VALUE]}
                            options={TYPE_OF_CARE}
                            onChangeCb={(e) =>
                              setFieldValue(
                                TRIAGE_DATA.CARE_VALUE,
                                e.target.value
                              )
                            }
                            error={
                              touched[TRIAGE_DATA.CARE_VALUE] &&
                              Boolean(errors[TRIAGE_DATA.CARE_VALUE])
                            }
                            helperText={
                              touched[TRIAGE_DATA.CARE_VALUE]
                                ? errors[TRIAGE_DATA.CARE_VALUE]
                                : undefined
                            }
                          />
                        </div>
                      )}
                      {/* BLOOD PRESSURE TEXTFIELD */}
                      {selectedCare === "other" && (
                        <Input
                          label="Detail"
                          placeholder="Enter Detail"
                          name={TRIAGE_DATA?.CARE_VALUE}
                          value={values[TRIAGE_DATA?.CARE_VALUE]}
                          onChangeCb={(e) => {
                            setFieldValue(
                              TRIAGE_DATA?.CARE_VALUE,
                              e.target.value
                            );
                          }}
                          onBlur={handleBlur}
                          size="small"
                          error={
                            touched[TRIAGE_DATA?.CARE_VALUE] &&
                            Boolean(errors[TRIAGE_DATA?.CARE_VALUE])
                          }
                          helperText={
                            touched[TRIAGE_DATA?.CARE_VALUE]
                              ? errors[TRIAGE_DATA?.CARE_VALUE]
                              : undefined
                          }
                        />
                      )}
                    </div>
                  </div>
                </DialogContent>
                {/* ACTION BUTTON */}
                <DialogActions style={{ padding: "24px" }}>
                  <Button
                    // disabled={!isValid || !dirty} // Disable button if form is empty or invalid
                    type="submit"
                    label="Save"
                    variant="contained"
                    onClickCb={() => {}}
                    style={{
                      padding: "8px 55px",
                      fontSize: "16px",
                    }}
                  />
                </DialogActions>
              </Form>
            );
          }}
        </Formik>
      </BootstrapDialog>
    </React.Fragment>
  );
}
