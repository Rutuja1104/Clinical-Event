import React from "react";
import * as Yup from "yup"
import { EDIT_PATIENT_PROFILE_DETAILS } from "./constants";
import { Form, Formik } from "formik";
import Button from "../../Molecules/button/Button";
import Input from "../../Atoms/Input/Input";
import DatePicker from "../../Atoms/DatePicker/DatePicker";
import ContactInput from "../../Atoms/Input/ContactInput";
import moment from "moment";

interface EditProfileProps {
    defaultSelectedData?: any;
    handleOnSubmittedData?: (formData: any) => void;
  }

const EditProfile =({defaultSelectedData,handleOnSubmittedData,}: EditProfileProps)=>{
    const validationSchema = Yup.object().shape({
        [EDIT_PATIENT_PROFILE_DETAILS.FIRST_NAME]: Yup.string().required(
          "First Name is required"
        ),
        [EDIT_PATIENT_PROFILE_DETAILS.LAST_NAME]: Yup.string().required(
          "Last Name is required"
        ),
        [EDIT_PATIENT_PROFILE_DETAILS.EMAIL]: Yup.string().email().required(
          "Email is required"
        ),
        [EDIT_PATIENT_PROFILE_DETAILS.CONTACT_NUMBER]: Yup.string()
        .matches(/^[0-9]+$/, "Contact number must contain only digits")
        .min(10, "Contact number must be at least 10 digits")
        .max(10, "Contact number cannot exceed 10 digits")
        .required(
          "Contact Number is required"
        ),
        [EDIT_PATIENT_PROFILE_DETAILS.BSA_ID]: Yup.string().required(
            "BSA ID is required"
        ),
        [EDIT_PATIENT_PROFILE_DETAILS.DATE_OF_BIRTH]: Yup.date()
        .max(new Date(), "Date of birth cannot be in the future")
        .required(
            "Date Of Birth is required"
        ),
        [EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_NUMBER]: Yup.string().required(
            "Unit Number is required"
        ),
        [EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_LEADER_NAME]: Yup.string().required(
            "Unit Leader Name is required"
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
        gap: "24px 16px",
      };

    return(
       <Formik
            initialValues={{
                [EDIT_PATIENT_PROFILE_DETAILS.FIRST_NAME]: "Andrew",
                [EDIT_PATIENT_PROFILE_DETAILS.LAST_NAME]: "Roberts",
                [EDIT_PATIENT_PROFILE_DETAILS.EMAIL]: "andrew.roberts@gmail.com",
                [EDIT_PATIENT_PROFILE_DETAILS.CONTACT_NUMBER]: "7891234560",
                [EDIT_PATIENT_PROFILE_DETAILS.BSA_ID]: "11081988",
                [EDIT_PATIENT_PROFILE_DETAILS.DATE_OF_BIRTH]: undefined,
                [EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_NUMBER]: "A251",
                [EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_LEADER_NAME]: "Dwane Johnson",
            }}

            validationSchema={validationSchema}
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
            className="h-full flex flex-col justify-between rounded-lg"
          >
            <div className="w-full flex flex-col rounded-lg">
              {/* PATIENT DETAILS */}
              <div>
                {/* <Heading title="Patient Details" customStyle={headerStyle} /> */}
                <div style={commonGridStyle}>
                  <Input
                    // disabled
                    textFieldLabel="First Name"
                    name={EDIT_PATIENT_PROFILE_DETAILS.FIRST_NAME}
                    value={values[EDIT_PATIENT_PROFILE_DETAILS.FIRST_NAME]}
                    onChangeCb={(e) => {
                      setFieldValue(
                        EDIT_PATIENT_PROFILE_DETAILS.FIRST_NAME,
                        e.target.value
                      );
                    }}
                    onBlur={handleBlur}
                    size="small"
                    error={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.FIRST_NAME] &&
                      Boolean(errors[EDIT_PATIENT_PROFILE_DETAILS.FIRST_NAME])
                    }
                    helperText={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.FIRST_NAME]
                        ? errors[EDIT_PATIENT_PROFILE_DETAILS.FIRST_NAME]
                        : undefined
                    }
                  />

                  <Input
                    // disabled
                    textFieldLabel="Last Name"
                    name={EDIT_PATIENT_PROFILE_DETAILS.LAST_NAME}
                    value={values[EDIT_PATIENT_PROFILE_DETAILS.LAST_NAME]}
                    onChangeCb={(e) => {
                      setFieldValue(
                        EDIT_PATIENT_PROFILE_DETAILS.LAST_NAME,
                        e.target.value
                      );
                    }}
                    size="small"
                    onBlur={handleBlur}
                    error={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.LAST_NAME] &&
                      Boolean(errors[EDIT_PATIENT_PROFILE_DETAILS.LAST_NAME])
                    }
                    helperText={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.LAST_NAME]
                        ? errors[EDIT_PATIENT_PROFILE_DETAILS.LAST_NAME]
                        : undefined
                    }
                  />

                  <Input
                    // disabled
                    textFieldLabel="Email"
                    name={EDIT_PATIENT_PROFILE_DETAILS.EMAIL}
                    value={values[EDIT_PATIENT_PROFILE_DETAILS.EMAIL]}
                    onChangeCb={(e) => {
                      setFieldValue(
                        EDIT_PATIENT_PROFILE_DETAILS.EMAIL,
                        e.target.value
                      );
                    }}
                    onBlur={handleBlur}
                    size="small"
                    error={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.EMAIL] &&
                      Boolean(errors[EDIT_PATIENT_PROFILE_DETAILS.EMAIL])
                    }
                    helperText={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.EMAIL]
                        ? errors[EDIT_PATIENT_PROFILE_DETAILS.EMAIL]
                        : undefined
                    }
                  />
                  <ContactInput
                    // disabled
                    textFieldLabel="Contact Number"
                    name={EDIT_PATIENT_PROFILE_DETAILS.CONTACT_NUMBER}
                    value={values[EDIT_PATIENT_PROFILE_DETAILS.CONTACT_NUMBER]}
                    onChangeCb={(value) => {
                      setFieldValue(
                        EDIT_PATIENT_PROFILE_DETAILS.CONTACT_NUMBER,
                        value
                      );
                    }}
                    onBlur={handleBlur}
                    size="small"
                    error={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.CONTACT_NUMBER] &&
                      Boolean(errors[EDIT_PATIENT_PROFILE_DETAILS.CONTACT_NUMBER])
                    }
                    helperText={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.CONTACT_NUMBER]
                        ? errors[EDIT_PATIENT_PROFILE_DETAILS.CONTACT_NUMBER]
                        : undefined
                    }
                  />

                    <Input
                    // disabled
                    textFieldLabel="BSA ID"
                    name={EDIT_PATIENT_PROFILE_DETAILS.BSA_ID}
                    value={values[EDIT_PATIENT_PROFILE_DETAILS.BSA_ID]}
                    onChangeCb={(e) => {
                      setFieldValue(
                        EDIT_PATIENT_PROFILE_DETAILS.BSA_ID,
                        e.target.value
                      );
                    }}
                    onBlur={handleBlur}
                    size="small"
                    error={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.BSA_ID] &&
                      Boolean(errors[EDIT_PATIENT_PROFILE_DETAILS.BSA_ID])
                    }
                    helperText={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.BSA_ID]
                        ? errors[EDIT_PATIENT_PROFILE_DETAILS.BSA_ID]
                        : undefined
                    }
                  />

                    <DatePicker
                    name={EDIT_PATIENT_PROFILE_DETAILS.DATE_OF_BIRTH}
                    value={values[EDIT_PATIENT_PROFILE_DETAILS.DATE_OF_BIRTH]}
                    onChangeCb={(value) => {
                      setFieldValue(
                        EDIT_PATIENT_PROFILE_DETAILS.DATE_OF_BIRTH,
                        value
                      );
                    }}
                    isStarPresent={true}
                    label="Date Of Birth"
                    style={{ width: "100%" }}
                    error={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.DATE_OF_BIRTH] &&
                      Boolean(errors[EDIT_PATIENT_PROFILE_DETAILS.DATE_OF_BIRTH])
                    }
                    helperText={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.DATE_OF_BIRTH]
                        ? errors[EDIT_PATIENT_PROFILE_DETAILS.DATE_OF_BIRTH]
                        : undefined
                    }
                  />

                    <Input
                    // disabled
                    textFieldLabel="Jamboree Unit Number"
                    name={EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_NUMBER}
                    value={values[EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_NUMBER]}
                    onChangeCb={(e) => {
                      setFieldValue(
                        EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_NUMBER,
                        e.target.value
                      );
                    }}
                    onBlur={handleBlur}
                    size="small"
                    error={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_NUMBER] &&
                      Boolean(errors[EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_NUMBER])
                    }
                    helperText={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_NUMBER]
                        ? errors[EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_NUMBER]
                        : undefined
                    }
                  />

                    <Input
                    // disabled
                    textFieldLabel="Jamboree Unit Leader Name"
                    name={EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_LEADER_NAME}
                    value={values[EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_LEADER_NAME]}
                    onChangeCb={(e) => {
                      setFieldValue(
                        EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_LEADER_NAME,
                        e.target.value
                      );
                    }}
                    onBlur={handleBlur}
                    size="small"
                    error={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_LEADER_NAME] &&
                      Boolean(errors[EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_LEADER_NAME])
                    }
                    helperText={
                      touched[EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_LEADER_NAME]
                        ? errors[EDIT_PATIENT_PROFILE_DETAILS.JAMBOREE_UNIT_LEADER_NAME]
                        : undefined
                    }
                  />
                </div>
              </div>
              </div>

             
            <div className="flex justify-end mt-10 gap-4">
              <Button
              label="Cancel"
              variant="outlined"
              onClickCb={() => {}}
              style={{
               width: "120px",
               height: "44px",
               padding: "12px 20px",
               fontSize: "16px",
               backgroundColor: "white",
               border: "none",
               color: "#393939",
              }}
              />
              <Button
                // disabled={!isValid} // Button disabled if form is invalid or submitting
                type="submit"
                label="Save"
                variant="contained"
                onClickCb={() => {}}
                style={{
                  width: "120px",
                  height: "44px",
                  padding: "12px 20px",
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

export default EditProfile;