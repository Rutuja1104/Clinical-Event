import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  EMERGENCY_CONTACT_RELATIONS,
  FORM_FIELDS_NAMES,
  GENDER,
} from "./constants";
import Input from "../../../component-lib/Atoms/Input/Input";
import Heading from "../../../component-lib/Atoms/heading/EventEHRHeading";
import Button from "../../../component-lib/Molecules/button/Button";
import SelectDropdown from "../../../component-lib/Atoms/Select/Select";
import DatePicker from "../../../component-lib/Atoms/DatePicker/DatePicker";
import ContactInput from "../../../component-lib/Atoms/Input/ContactInput";

const CreatePatientForm = () => {
  const validationSchema = Yup.object().shape({
    [FORM_FIELDS_NAMES.FULL_NAME]: Yup.string().required("Name is required"),
    [FORM_FIELDS_NAMES.BSA_ID]: Yup.string()
      .matches(/^\-?\d+$/, "BSA ID must be a number")
      .required("BSA ID is required"),
    [FORM_FIELDS_NAMES.DOB]: Yup.string().required("Date of Birth is required"),
    [FORM_FIELDS_NAMES.GENDER]: Yup.string().required("Gender is required"),
    [FORM_FIELDS_NAMES.CONTACT_NUMBER]: Yup.string()
      .matches(/^\(\d{3}\) \d{3}-\d{4}$/, "Invalid Contact Number")
      .required("Contact Number is required"),
    [FORM_FIELDS_NAMES.BASE_CAMP]: Yup.string().required(
      "Base Camp is required",
    ),
    [FORM_FIELDS_NAMES.JAMBOREE_UNIT_LEADER_NAME]: Yup.string().required(
      "Jamboree Unit Leader Name is required",
    ),
    [FORM_FIELDS_NAMES.JAMBOREE_UNIT_NUMBER]: Yup.number().required(
      "Jamboree Unit Number is required",
    ),
    [FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NAME]: Yup.string().required(
      "Emergency Contact Name is required",
    ),
    [FORM_FIELDS_NAMES.EMERGENCY_CONTACT_RELATION]: Yup.string().required(
      "Emergency Contact Relation is required",
    ),
    [FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NUMBER]: Yup.string()
      .matches(/^\(\d{3}\) \d{3}-\d{4}$/, "Invalid Emergency Contact Number")
      .required("Emergency Contact Number is required"),
  });

  const headerStyle = {
    fontWeight: "500",
    fontSize: "16px",
  };

  return (
    <Formik
      initialValues={{
        [FORM_FIELDS_NAMES.FULL_NAME]: "",
        [FORM_FIELDS_NAMES.BSA_ID]: "",
        [FORM_FIELDS_NAMES.DOB]: undefined,
        [FORM_FIELDS_NAMES.GENDER]: "",
        [FORM_FIELDS_NAMES.BASE_CAMP]: "",
        [FORM_FIELDS_NAMES.JAMBOREE_UNIT_LEADER_NAME]: "",
        [FORM_FIELDS_NAMES.JAMBOREE_UNIT_NUMBER]: "",
        [FORM_FIELDS_NAMES.CONTACT_NUMBER]: "",
        [FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NAME]: "",
        [FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NUMBER]: "",
        [FORM_FIELDS_NAMES.EMERGENCY_CONTACT_RELATION]: "",
      }}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={(formVals) => {
        try {
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({
        errors,
        touched,
        submitForm,
        isSubmitting,
        handleReset,
        handleBlur,
        values,
        setFieldValue,
        handleSubmit,
      }) => {

        return (
          <Form
            onSubmit={handleSubmit}
            className="h-full flex flex-col justify-between"
          >
            <div className="w-full flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <Heading
                  title="Demographic Details"
                  customStyle={headerStyle}
                />
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      textFieldLabel="Full Name"
                      name={FORM_FIELDS_NAMES.FULL_NAME}
                      value={values[FORM_FIELDS_NAMES.FULL_NAME]}
                      onChangeCb={(e) => {
                        setFieldValue(
                          FORM_FIELDS_NAMES.FULL_NAME,
                          e.target.value,
                        );
                      }}
                      onBlur={handleBlur}
                      size="small"
                      error={
                        touched[FORM_FIELDS_NAMES.FULL_NAME] &&
                        Boolean(errors[FORM_FIELDS_NAMES.FULL_NAME])
                      }
                      helperText={
                        touched[FORM_FIELDS_NAMES.FULL_NAME]
                          ? errors[FORM_FIELDS_NAMES.FULL_NAME]
                          : undefined
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      textFieldLabel="BSA ID"
                      name={FORM_FIELDS_NAMES.BSA_ID}
                      value={values[FORM_FIELDS_NAMES.BSA_ID]}
                      onChangeCb={(e) => {
                        setFieldValue(FORM_FIELDS_NAMES.BSA_ID, e.target.value);
                      }}
                      onBlur={handleBlur}
                      size="small"
                      error={
                        touched[FORM_FIELDS_NAMES.BSA_ID] &&
                        Boolean(errors[FORM_FIELDS_NAMES.BSA_ID])
                      }
                      helperText={
                        touched[FORM_FIELDS_NAMES.BSA_ID]
                          ? errors[FORM_FIELDS_NAMES.BSA_ID]
                          : undefined
                      }
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <DatePicker 
                    name={FORM_FIELDS_NAMES.DOB}
                    value={values[FORM_FIELDS_NAMES.DOB]}
                    onChangeCb={(value) => {
                      setFieldValue(FORM_FIELDS_NAMES.DOB, value);
                    }}
                    label="Date of Birth" 
                    style={{ width: "100%" }}
                    error={
                      touched[FORM_FIELDS_NAMES.DOB] &&
                      Boolean(errors[FORM_FIELDS_NAMES.DOB])
                    }
                    helperText={
                      touched[FORM_FIELDS_NAMES.DOB]
                        ? errors[FORM_FIELDS_NAMES.DOB]
                        : undefined
                    }
                    />
                  </div>
                  <div className="flex-1">
                    <SelectDropdown
                      label="Gender"
                      name={FORM_FIELDS_NAMES.GENDER}
                      value={values[FORM_FIELDS_NAMES.GENDER]}
                      options={GENDER}
                      onChangeCb={(e) => {
                        setFieldValue(FORM_FIELDS_NAMES.GENDER, e.target.value);
                      }}
                      onBlur={handleBlur}
                      error={
                        touched[FORM_FIELDS_NAMES.GENDER] &&
                        Boolean(errors[FORM_FIELDS_NAMES.GENDER])
                      }
                      helperText={
                        touched[FORM_FIELDS_NAMES.GENDER]
                          ? errors[FORM_FIELDS_NAMES.GENDER]
                          : undefined
                      }
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <ContactInput
                      textFieldLabel="Contact Number"
                      name={FORM_FIELDS_NAMES.CONTACT_NUMBER}
                      value={values[FORM_FIELDS_NAMES.CONTACT_NUMBER]}
                      onChangeCb={(value) => {
                        setFieldValue(FORM_FIELDS_NAMES.CONTACT_NUMBER, value);
                      }}
                      size="small"
                      onBlur={handleBlur}
                      error={
                        touched[FORM_FIELDS_NAMES.CONTACT_NUMBER] &&
                        Boolean(errors[FORM_FIELDS_NAMES.CONTACT_NUMBER])
                      }
                      helperText={
                        touched[FORM_FIELDS_NAMES.CONTACT_NUMBER]
                          ? errors[FORM_FIELDS_NAMES.CONTACT_NUMBER]
                          : undefined
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      textFieldLabel="Base Camp"
                      name={FORM_FIELDS_NAMES.BASE_CAMP}
                      value={values[FORM_FIELDS_NAMES.BASE_CAMP]}
                      onChangeCb={(e) => {
                        setFieldValue(
                          FORM_FIELDS_NAMES.BASE_CAMP,
                          e.target.value,
                        );
                      }}
                      size="small"
                      onBlur={handleBlur}
                      error={
                        touched[FORM_FIELDS_NAMES.BASE_CAMP] &&
                        Boolean(errors[FORM_FIELDS_NAMES.BASE_CAMP])
                      }
                      helperText={
                        touched[FORM_FIELDS_NAMES.BASE_CAMP]
                          ? errors[FORM_FIELDS_NAMES.BASE_CAMP]
                          : undefined
                      }
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      textFieldLabel="Jamboree Unit Number"
                      name={FORM_FIELDS_NAMES.JAMBOREE_UNIT_NUMBER}
                      value={values[FORM_FIELDS_NAMES.JAMBOREE_UNIT_NUMBER]}
                      onChangeCb={(e) => {
                        setFieldValue(
                          FORM_FIELDS_NAMES.JAMBOREE_UNIT_NUMBER,
                          e.target.value,
                        );
                      }}
                      size="small"
                      onBlur={handleBlur}
                      error={
                        touched[FORM_FIELDS_NAMES.JAMBOREE_UNIT_NUMBER] &&
                        Boolean(errors[FORM_FIELDS_NAMES.JAMBOREE_UNIT_NUMBER])
                      }
                      helperText={
                        touched[FORM_FIELDS_NAMES.JAMBOREE_UNIT_NUMBER]
                          ? errors[FORM_FIELDS_NAMES.JAMBOREE_UNIT_NUMBER]
                          : undefined
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      textFieldLabel="Jamboree Unit Leader Name"
                      name={FORM_FIELDS_NAMES.JAMBOREE_UNIT_LEADER_NAME}
                      value={
                        values[FORM_FIELDS_NAMES.JAMBOREE_UNIT_LEADER_NAME]
                      }
                      onChangeCb={(e) => {
                        setFieldValue(
                          FORM_FIELDS_NAMES.JAMBOREE_UNIT_LEADER_NAME,
                          e.target.value,
                        );
                      }}
                      size="small"
                      onBlur={handleBlur}
                      error={Boolean(
                        touched[FORM_FIELDS_NAMES.JAMBOREE_UNIT_LEADER_NAME] &&
                          errors[FORM_FIELDS_NAMES.JAMBOREE_UNIT_LEADER_NAME],
                      )}
                      helperText={
                        touched[FORM_FIELDS_NAMES.JAMBOREE_UNIT_LEADER_NAME]
                          ? errors[FORM_FIELDS_NAMES.JAMBOREE_UNIT_LEADER_NAME]
                          : undefined
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Heading
                  title="Emergency Contact Details"
                  customStyle={headerStyle}
                />
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      textFieldLabel="Emergency Contact Name"
                      name={FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NAME}
                      value={values[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NAME]}
                      onChangeCb={(e) => {
                        setFieldValue(
                          FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NAME,
                          e.target.value,
                        );
                      }}
                      size="small"
                      onBlur={handleBlur}
                      error={Boolean(
                        touched[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NAME] &&
                          errors[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NAME],
                      )}
                      helperText={
                        touched[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NAME]
                          ? errors[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NAME]
                          : undefined
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <SelectDropdown
                      label="Emergency Contact Relation"
                      name={FORM_FIELDS_NAMES.EMERGENCY_CONTACT_RELATION}
                      value={
                        values[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_RELATION]
                      }
                      options={EMERGENCY_CONTACT_RELATIONS}
                      onChangeCb={(e) =>
                        setFieldValue(
                          FORM_FIELDS_NAMES.EMERGENCY_CONTACT_RELATION,
                          e.target.value,
                        )
                      }
                      onBlur={handleBlur}
                      error={Boolean(
                        touched[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NAME] &&
                          errors[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_RELATION],
                      )}
                      helperText={
                        touched[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NAME]
                          ? errors[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NAME]
                          : undefined
                      }
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-[50%] pr-2">
                    <ContactInput
                      textFieldLabel="Emergency Contact Number"
                      name={FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NUMBER}
                      value={values[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NUMBER]}
                      onChangeCb={(value) => {
                        setFieldValue(
                          FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NUMBER,
                          value,
                        );
                      }}
                      size="small"
                      onBlur={handleBlur}
                      error={
                        touched[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NUMBER] &&
                        Boolean(
                          errors[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NUMBER],
                        )
                      }
                      helperText={
                        touched[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NUMBER]
                          ? errors[FORM_FIELDS_NAMES.EMERGENCY_CONTACT_NUMBER]
                          : undefined
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                label="Add New Patient"
                variant="contained"
                onClickCb={() => {}}
                style={{
                  padding: "10px 18px",
                }}
              ></Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreatePatientForm;
