import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../../../component-lib/Atoms/Input/Input";
import Heading from "../../../component-lib/Atoms/heading/EventEHRHeading";
import Button from "../../../component-lib/Molecules/button/Button";
import SelectDropdown from "../../../component-lib/Atoms/Select/Select";
import { FORM_FIELDS_NAMES } from "../../../screens/patient-screen/create-patient-drawer/constants";
import EventEHRTimePicker from "../../Molecules/time-picker/EventEHRTimePicker";
import { CREATE_VISIT_FORM_DETAILS, TYPE_OF_CARE } from "./constants";
import DatePicker from "../../Atoms/DatePicker/DatePicker";
import { Dayjs } from "dayjs";
import ContactInput from "../../Atoms/Input/ContactInput";

interface CreateVisitFormProps {
  defaultSelectedData?: any;
  handleOnSubmittedData?: (formData: any) => void;
}

const CreateVisitForm = ({
  defaultSelectedData,
  handleOnSubmittedData,
}: CreateVisitFormProps) => {
  const validationSchema = Yup.object().shape({
    [CREATE_VISIT_FORM_DETAILS.CHIEF_COMPLAINT]: Yup.string().required(
      "Chief Complaint is required"
    ),
    [CREATE_VISIT_FORM_DETAILS.INCIDENT_DATE]: Yup.string().required(
      "Incident Date is required"
    ),

    [CREATE_VISIT_FORM_DETAILS.INCIDENT_LOCATION]: Yup.string().required(
      "Incident Location is required"
    ),
    [CREATE_VISIT_FORM_DETAILS.TYPE_OF_CARE]: Yup.string().required(
      "Type of care is required"
    ),
  });

  const headerStyle = {
    fontWeight: "500",
    fontSize: "16px",
    paddingBottom: "10px",
  };

  const commonGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  };

  return (
    <Formik
      initialValues={{
        [CREATE_VISIT_FORM_DETAILS.PATIENT_NAME]: "Andrew Roberts",
        [CREATE_VISIT_FORM_DETAILS.PATIENT_BSA_ID]: "11081197",
        [CREATE_VISIT_FORM_DETAILS.CAMP_NAME]: "Charlie Camp",
        [CREATE_VISIT_FORM_DETAILS.JUN]: "A251",
        [CREATE_VISIT_FORM_DETAILS.CHIEF_COMPLAINT]: "",
        [CREATE_VISIT_FORM_DETAILS.INCIDENT_DATE]: undefined,
        [CREATE_VISIT_FORM_DETAILS.INCIDENT_TIME]: "",
        [CREATE_VISIT_FORM_DETAILS.INCIDENT_LOCATION]: "",
        [CREATE_VISIT_FORM_DETAILS.WITNESS_NAME]: "",
        [CREATE_VISIT_FORM_DETAILS.WITNESS_CONTACT_NAME]: "",
        [CREATE_VISIT_FORM_DETAILS.TYPE_OF_CARE]: "",
      }}
      validationSchema={validationSchema}
      //   validateOnChange={false}
      //   validateOnBlur={false}
      enableReinitialize
      onSubmit={(values, { setSubmitting }) => {
        try {
          handleOnSubmittedData && handleOnSubmittedData(values);
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
        submitForm,
        isSubmitting,
        handleReset,
        isValid,
        values,
        touched,
        setFieldValue,
        handleBlur,
        handleSubmit,
      }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="h-full flex flex-col justify-between"
          >
            <div className="w-full flex flex-col gap-6">
              {/* PATIENT DETAILS */}
              <div>
                <Heading title="Patient Details" customStyle={headerStyle} />
                <div style={commonGridStyle}>
                  <Input
                    disabled
                    textFieldLabel=""
                    name={CREATE_VISIT_FORM_DETAILS.PATIENT_NAME}
                    value={values[CREATE_VISIT_FORM_DETAILS.PATIENT_NAME]}
                    onChangeCb={(e) => {
                      setFieldValue(
                        CREATE_VISIT_FORM_DETAILS.PATIENT_NAME,
                        e.target.value
                      );
                    }}
                    onBlur={handleBlur}
                    size="small"
                    error={
                      touched[CREATE_VISIT_FORM_DETAILS.PATIENT_NAME] &&
                      Boolean(errors[CREATE_VISIT_FORM_DETAILS.PATIENT_NAME])
                    }
                    helperText={
                      touched[CREATE_VISIT_FORM_DETAILS.PATIENT_NAME]
                        ? errors[CREATE_VISIT_FORM_DETAILS.PATIENT_NAME]
                        : undefined
                    }
                  />

                  <Input
                    disabled
                    textFieldLabel=""
                    name={CREATE_VISIT_FORM_DETAILS.PATIENT_BSA_ID}
                    value={values[CREATE_VISIT_FORM_DETAILS.PATIENT_BSA_ID]}
                    onChangeCb={(e) => {
                      setFieldValue(
                        CREATE_VISIT_FORM_DETAILS.PATIENT_BSA_ID,
                        e.target.value
                      );
                    }}
                    size="small"
                    onBlur={handleBlur}
                    error={
                      touched[CREATE_VISIT_FORM_DETAILS.PATIENT_BSA_ID] &&
                      Boolean(errors[CREATE_VISIT_FORM_DETAILS.PATIENT_BSA_ID])
                    }
                    helperText={
                      touched[CREATE_VISIT_FORM_DETAILS.PATIENT_BSA_ID]
                        ? errors[CREATE_VISIT_FORM_DETAILS.PATIENT_BSA_ID]
                        : undefined
                    }
                  />

                  <Input
                    disabled
                    textFieldLabel=""
                    name={CREATE_VISIT_FORM_DETAILS.CAMP_NAME}
                    value={values[CREATE_VISIT_FORM_DETAILS.CAMP_NAME]}
                    onChangeCb={(e) => {
                      setFieldValue(
                        CREATE_VISIT_FORM_DETAILS.CAMP_NAME,
                        e.target.value
                      );
                    }}
                    onBlur={handleBlur}
                    size="small"
                    error={
                      touched[CREATE_VISIT_FORM_DETAILS.CAMP_NAME] &&
                      Boolean(errors[CREATE_VISIT_FORM_DETAILS.CAMP_NAME])
                    }
                    helperText={
                      touched[CREATE_VISIT_FORM_DETAILS.CAMP_NAME]
                        ? errors[CREATE_VISIT_FORM_DETAILS.CAMP_NAME]
                        : undefined
                    }
                  />
                  <Input
                    disabled
                    textFieldLabel=""
                    name={CREATE_VISIT_FORM_DETAILS.JUN}
                    value={values[CREATE_VISIT_FORM_DETAILS.JUN]}
                    onChangeCb={(e) => {
                      setFieldValue(
                        CREATE_VISIT_FORM_DETAILS.JUN,
                        e.target.value
                      );
                    }}
                    onBlur={handleBlur}
                    size="small"
                    error={
                      touched[CREATE_VISIT_FORM_DETAILS.JUN] &&
                      Boolean(errors[CREATE_VISIT_FORM_DETAILS.JUN])
                    }
                    helperText={
                      touched[CREATE_VISIT_FORM_DETAILS.JUN]
                        ? errors[CREATE_VISIT_FORM_DETAILS.JUN]
                        : undefined
                    }
                  />
                </div>
              </div>

              {/* CHIEF COMPLAINT SECTION */}
              <div>
                <Heading
                  title="Chief Complaint"
                  isRequired={true}
                  customStyle={headerStyle}
                />
                <div>
                  <Input
                    multiline={true}
                    rows={3}
                    textFieldLabel="Enter Chief Complaint"
                    name={CREATE_VISIT_FORM_DETAILS.CHIEF_COMPLAINT}
                    value={values[CREATE_VISIT_FORM_DETAILS.CHIEF_COMPLAINT]}
                    onChangeCb={(e) => {
                      setFieldValue(
                        CREATE_VISIT_FORM_DETAILS.CHIEF_COMPLAINT,
                        e.target.value
                      );
                    }}
                    onBlur={handleBlur}
                    size="small"
                    error={
                      touched[CREATE_VISIT_FORM_DETAILS.CHIEF_COMPLAINT] &&
                      Boolean(errors[CREATE_VISIT_FORM_DETAILS.CHIEF_COMPLAINT])
                    }
                    helperText={
                      touched[CREATE_VISIT_FORM_DETAILS.CHIEF_COMPLAINT]
                        ? errors[CREATE_VISIT_FORM_DETAILS.CHIEF_COMPLAINT]
                        : undefined
                    }
                  />
                </div>
              </div>

              {/* INCIDENT DETAILS */}
              <div>
                <Heading title="Incident Details" customStyle={headerStyle} />
                <div
                  style={{
                    ...commonGridStyle,
                    rowGap: "21px",
                    columnGap: "16px",
                  }}
                >
                  <DatePicker
                    name={CREATE_VISIT_FORM_DETAILS.INCIDENT_DATE}
                    value={values[CREATE_VISIT_FORM_DETAILS.INCIDENT_DATE]}
                    onChangeCb={(value) => {
                      setFieldValue(
                        CREATE_VISIT_FORM_DETAILS.INCIDENT_DATE,
                        value
                      );
                    }}
                    isStarPresent={true}
                    label="Enter Incident Date"
                    style={{ width: "100%" }}
                    error={
                      touched[CREATE_VISIT_FORM_DETAILS.INCIDENT_DATE] &&
                      Boolean(errors[CREATE_VISIT_FORM_DETAILS.INCIDENT_DATE])
                    }
                    helperText={
                      touched[CREATE_VISIT_FORM_DETAILS.INCIDENT_DATE]
                        ? errors[CREATE_VISIT_FORM_DETAILS.INCIDENT_DATE]
                        : undefined
                    }
                  />

                  <EventEHRTimePicker
                    name={CREATE_VISIT_FORM_DETAILS.INCIDENT_TIME}
                    label="Enter Incident Time"
                    handleTimeChange={(time: Dayjs | null) => {
                      if (time) {
                        // Process the selected time
                        console.log(time.format("HH:mm")); // Example format
                        setFieldValue(
                          CREATE_VISIT_FORM_DETAILS.INCIDENT_TIME,
                          time.format("HH:mm")
                        );
                      }
                    }}
                  />

                  <SelectDropdown
                    label="Incident Location"
                    isStarPresent={true}
                    value={values[CREATE_VISIT_FORM_DETAILS.INCIDENT_LOCATION]}
                    options={TYPE_OF_CARE}
                    onChangeCb={(e) =>
                      setFieldValue(
                        CREATE_VISIT_FORM_DETAILS.INCIDENT_LOCATION,
                        e.target.value
                      )
                    }
                    error={
                      touched[CREATE_VISIT_FORM_DETAILS.INCIDENT_LOCATION] &&
                      Boolean(
                        errors[CREATE_VISIT_FORM_DETAILS.INCIDENT_LOCATION]
                      )
                    }
                    helperText={
                      touched[CREATE_VISIT_FORM_DETAILS.INCIDENT_LOCATION]
                        ? errors[CREATE_VISIT_FORM_DETAILS.INCIDENT_LOCATION]
                        : undefined
                    }
                  />

                  <Input
                    textFieldLabel="Witness Name"
                    name={CREATE_VISIT_FORM_DETAILS.WITNESS_NAME}
                    value={values[CREATE_VISIT_FORM_DETAILS.WITNESS_NAME]}
                    onChangeCb={(e) => {
                      setFieldValue(
                        CREATE_VISIT_FORM_DETAILS.WITNESS_NAME,
                        e.target.value
                      );
                    }}
                    size="small"
                    onBlur={handleBlur}
                    error={
                      touched[CREATE_VISIT_FORM_DETAILS.WITNESS_NAME] &&
                      Boolean(errors[CREATE_VISIT_FORM_DETAILS.WITNESS_NAME])
                    }
                    helperText={
                      touched[CREATE_VISIT_FORM_DETAILS.WITNESS_NAME]
                        ? errors[CREATE_VISIT_FORM_DETAILS.WITNESS_NAME]
                        : undefined
                    }
                  />

                  <ContactInput
                    textFieldLabel="Witness Contact Number"
                    name={CREATE_VISIT_FORM_DETAILS?.WITNESS_CONTACT_NAME}
                    value={
                      values[CREATE_VISIT_FORM_DETAILS.WITNESS_CONTACT_NAME]
                    }
                    onChangeCb={(value) => {
                      setFieldValue(
                        CREATE_VISIT_FORM_DETAILS.WITNESS_CONTACT_NAME,
                        value
                      );
                    }}
                    size="small"
                    onBlur={handleBlur}
                    error={
                      touched[CREATE_VISIT_FORM_DETAILS.WITNESS_CONTACT_NAME] &&
                      Boolean(
                        errors[CREATE_VISIT_FORM_DETAILS.WITNESS_CONTACT_NAME]
                      )
                    }
                    helperText={
                      touched[CREATE_VISIT_FORM_DETAILS.WITNESS_CONTACT_NAME]
                        ? errors[CREATE_VISIT_FORM_DETAILS.WITNESS_CONTACT_NAME]
                        : undefined
                    }
                  />

                  {/* <Input
                    textFieldLabel="Witness Contact Number"
                    name={CREATE_VISIT_FORM_DETAILS?.WITNESS_CONTACT_NAME}
                    value={
                      values[CREATE_VISIT_FORM_DETAILS.WITNESS_CONTACT_NAME]
                    }
                    onChangeCb={(e) => {
                      setFieldValue(
                        CREATE_VISIT_FORM_DETAILS.WITNESS_CONTACT_NAME,
                        e.target.value
                      );
                    }}
                    size="small"
                    onBlur={handleBlur}
                    error={
                      touched[CREATE_VISIT_FORM_DETAILS.WITNESS_CONTACT_NAME] &&
                      Boolean(
                        errors[CREATE_VISIT_FORM_DETAILS.WITNESS_CONTACT_NAME]
                      )
                    }
                    helperText={
                      touched[CREATE_VISIT_FORM_DETAILS.WITNESS_CONTACT_NAME]
                        ? errors[CREATE_VISIT_FORM_DETAILS.WITNESS_CONTACT_NAME]
                        : undefined
                    }
                  /> */}
                </div>
              </div>

              {/* TYPE OF CARE SECTION */}
              <div>
                <Heading
                  isRequired={true}
                  title="Type of Care"
                  customStyle={headerStyle}
                />
                <div className="flex gap-4">
                  <SelectDropdown
                    label="Select Type of Care"
                    value={values[CREATE_VISIT_FORM_DETAILS.TYPE_OF_CARE]}
                    options={TYPE_OF_CARE}
                    onChangeCb={(e) =>
                      setFieldValue(
                        CREATE_VISIT_FORM_DETAILS.TYPE_OF_CARE,
                        e.target.value
                      )
                    }
                    error={
                      touched[CREATE_VISIT_FORM_DETAILS.TYPE_OF_CARE] &&
                      Boolean(errors[CREATE_VISIT_FORM_DETAILS.TYPE_OF_CARE])
                    }
                    helperText={
                      touched[CREATE_VISIT_FORM_DETAILS.TYPE_OF_CARE]
                        ? errors[CREATE_VISIT_FORM_DETAILS.TYPE_OF_CARE]
                        : undefined
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-10">
              <Button
                // disabled={!isValid} // Button disabled if form is invalid or submitting
                type="submit"
                label="Create Visit"
                variant="contained"
                onClickCb={() => {}}
                style={{
                  padding: "8px 55px",
                  fontSize: "16px",
                }}
              ></Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateVisitForm;
