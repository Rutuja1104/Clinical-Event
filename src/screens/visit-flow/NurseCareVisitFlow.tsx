import { useState } from "react";
import {
  deleteIcon,
  dummyAvatar,
  editIconInBox,
  searchIcon,
} from "../../assets";
import WrapperCard from "../../component-lib/Atoms/card/EventEHRWrapperCard";
import Heading from "../../component-lib/Atoms/heading/EventEHRHeading";
import SearchSelectDropdown from "../../component-lib/Atoms/SearchSelectDropdown/EventEHRSearchSelectDropdown";
import Button from "../../component-lib/Molecules/button/Button";
import Table from "../../component-lib/Organisms/table/EventEHRTable";
import useDeviceType from "../../custom-hooks/DeviceType";
import DischargeFormPreviewModel from "../../utils/discharge-form-preview-model/DischargeFormPreviewModel";
import EventEHRVitalsCard from "../../component-lib/Molecules/card/EventEHRVitalsCard";
import Input from "../../component-lib/Atoms/Input/Input";
import EventEHRRadioButton from "../../component-lib/Molecules/radioButton/EventEHRRadioButton";
import SelectDropdown from "../../component-lib/Atoms/Select/Select";
import { TYPE_OF_CARE } from "../../component-lib/Organisms/create-visit-dialog/constants";

const NurseCareVisitFlow = () => {
  const deviceType = useDeviceType();
  const [openDischargeForm, setOpenDischargeForm] = useState(false);
  const [selectedCare, setSelectedCare] = useState("woundCare");

  const [formFieldData, setFormFieldData] = useState({
    presentIllnessHistory: "",
    care: "woundCare",
    careValue: "",
    description: "",
    assessmentDescription: "",
    plan: "",
  });

  const triageCardData = [
    { label: "Normal", temperature: 98, title: "Temperature", unit: "F" },
    { label: "Normal", temperature: 99, title: "Oxygen Saturation", unit: "%" },
    { label: "Normal", temperature: 98, title: "Heart Rate", unit: "bpm" },
    {
      label: "Normal",
      temperature: "21",
      title: "Respiration Rate",
      unit: "breath per minute",
    },
    {
      label: "Normal",
      temperature: "120/80",
      title: "Blood Pressure",
      unit: "mmhg",
    },
  ];

  const patientDetails = [
    {
      label: "Full Name",
      value: "Jayesh Sevatkar",
    },
    {
      label: "BSA ID",
      value: "123456789",
    },
    {
      label: "Email",
      value: "jayeshsevatkar55@gmail.com",
    },
    {
      label: "Contact Number",
      value: "8888585093",
    },
    {
      label: "Emergency Contact Number",
      value: "8888585093",
    },
  ];

  const ICDCodeColumns = [
    {
      field: "srNo",
      label: <div>Sr No</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">1</p>;
      },
    },
    {
      field: "details",
      label: <div className="w-[70vw] max-w-[50vw]">Details</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">Headache</p>;
      },
    },
    {
      field: "action",
      label: <div>Action</div>,
      renderLogic: (row: any) => {
        return (
          <>
            <div className="flex items-center">
              <img
                alt="delete-icon"
                className="cursor-pointer"
                src={deleteIcon}
                width={"18px"}
                height={"19.5px"}
              />
            </div>
          </>
        );
      },
    },
  ];

  return (
    <WrapperCard
      customClasses="m-3 p-3 pl-4 pr-4 h-[calc(100vh-97px)] overflow-auto"
      customStyle={{ minWidth: deviceType !== "mobile" ? "400px" : "" }}
    >
      <div className="flex flex-col justify-between gap-2 h-full">
        <div className="flex flex-col justify-between gap-3 overflow-hidden">
          {/* HEADING */}
          <Heading title="Visit Note" customStyle={{ color: "#1D1D1D" }} />
          {/* MAIN CONTENT */}
          <div className="overflow-auto">
            {/* PROFILE INFO CARD */}
            <div className="flex background-color-F1F1F1 border-radius-8px py-4 px-6">
              <div
                className={`flex items-center border-radius-8px ${deviceType === "mobile" ? "gap-4" : "gap-[60px]"} w-full`}
              >
                {deviceType !== "mobile" && (
                  <img
                    className="border-radius-6px"
                    src={dummyAvatar}
                    alt="profile-picture"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <div
                  className={`patient-details-card`}
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      deviceType === "mobile"
                        ? "1fr"
                        : deviceType === "small-tablet"
                          ? "1fr 1fr"
                          : deviceType === "tablet"
                            ? "1fr 1fr 1fr"
                            : "1fr 1fr 1fr 1fr 1fr",
                  }}
                >
                  {patientDetails?.map((data, index) => (
                    <div
                      key={index}
                      className={` flex flex-col flex-1 gap-2 px-6 mb-2 ${index === patientDetails.length - 1 ? "" : deviceType === "mobile" ? "" : "border-e-2"} ${deviceType === "mobile" ? "my-2 px-0" : ""}`}
                    >
                      <div className="font-size-14px font-weight-500 color-727272">
                        {data?.label}
                      </div>
                      <div className="color-393939 font-weight-500">
                        {data?.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* TRIAGE CARD */}
            <div className="mt-5 mb-3 flex flex-col gap-3">
              <Heading title="Triage" customStyle={{ color: "#393939" }} />
              <div className="flex flex-wrap gap-3">
                {triageCardData?.map((data: any, index) => (
                  <EventEHRVitalsCard
                    key={index}
                    label={data?.label}
                    temperature={data?.temperature}
                    title={data?.title}
                    unit={data?.unit}
                  />
                ))}
              </div>
            </div>
            {/* SUBJECTIVE */}
            <div className="flex flex-col pt-3">
              <Heading
                title="Subjective"
                customStyle={{
                  fontWeight: 500,
                  color: "#1D1D1D",
                  fontSize: "16px",
                  marginBottom: "8px",
                }}
              />
              <div className="flex justify-between items-center mb-2">
                <Heading
                  title="Chief Complaint"
                  customStyle={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#565656",
                  }}
                />
                <img
                  alt="edit-icon"
                  src={editIconInBox}
                  width={"36px"}
                  height={"36px"}
                  className="cursor-pointer"
                  onClick={() => {}}
                />
              </div>
              <div>
                {/* <Input
                multiline
                rows={2}
                disabled
                value="Lorem ipsum dolor sit amet consectetur. Enim vestibulum a tortor egestas dui sit. Magna nunc a facilisis pulvinar orci. Ullamcorper pellentesque mauris cras nulla nec vehicula. Morbi dictum vel sed iaculis sit mattis blandit rhoncus."
              /> */}
                <div
                  className="font-weight-500 border-radius-8px color-979797"
                  style={{
                    padding: "14px 16px",
                    border: "1px solid #D2D2D2",
                    background: "#F8F8F8",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Enim vestibulum a
                  tortor egestas dui sit. Magna nunc a facilisis pulvinar orci.
                  Ullamcorper pellentesque mauris cras nulla nec vehicula. Morbi
                  dictum vel sed iaculis sit mattis blandit rhoncus.
                </div>
                <div className="mt-2">
                  <Heading
                    title="History of Present Illness"
                    customStyle={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#565656",
                      marginBottom: "8px",
                    }}
                  />
                  <Input
                    rows={3}
                    size="small"
                    textFieldLabel="Enter History of Present Illness here"
                    multiline={true}
                    maxWords={250}
                    name="presentIllnessHistory"
                    value={formFieldData.presentIllnessHistory}
                    onChangeCb={(e: any) => {
                      setFormFieldData((prevData: any) => ({
                        ...prevData,
                        presentIllnessHistory: e?.target?.value,
                      }));
                    }}
                  />
                </div>
              </div>
              {/* OBJECTIVE */}
              <div className="mt-6">
                <Heading
                  title="Objective"
                  customStyle={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    marginBottom: "8px",
                  }}
                />
                <div className="ml-2 mr-2 mb-4">
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
                      setSelectedCare(value);
                      setFormFieldData((prevData: any) => ({
                        ...prevData,
                        care: value,
                      }));
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
                          fontWeight: 500,
                          fontSize: "16px",
                          color: "#393939",
                          marginBottom: "12px",
                        }}
                      />
                      <div style={{ maxWidth: "660px" }}>
                        <SelectDropdown
                          label=""
                          name="careValue"
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
                          value={formFieldData?.careValue}
                          options={TYPE_OF_CARE}
                          onChangeCb={(e) =>
                            setFormFieldData((prevData: any) => ({
                              ...prevData,
                              careValue: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  )}
                  {/* BLOOD PRESSURE TEXTFIELD */}
                  {selectedCare === "other" && (
                    <div style={{ maxWidth: "660px" }}>
                      <Input
                        label="Detail"
                        placeholder="Enter Detail"
                        name={"careValue"}
                        value={formFieldData?.careValue}
                        onChangeCb={(e) => {
                          setFormFieldData((prevData: any) => ({
                            ...prevData,
                            careValue: e.target.value,
                          }));
                        }}
                        size="small"
                      />
                    </div>
                  )}
                </div>
              </div>
              {/* Description */}
              <div className="mt-4">
                <Heading
                  title="Description"
                  customStyle={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#565656",
                    marginBottom: "8px",
                  }}
                />
                <Input
                  rows={3}
                  maxWords={250}
                  size="small"
                  placeholder="Enter Description"
                  multiline
                  name="description"
                  value={formFieldData.description}
                  onChangeCb={(e: any) => {
                    setFormFieldData((prevData: any) => ({
                      ...prevData,
                      description: e?.target?.value,
                    }));
                  }}
                />
              </div>

              {/* TABLE */}
              <div className="mt-6">
                <Heading
                  title="Assessment"
                  customStyle={{ fontSize: "16px" }}
                />
                <div className="mt-2">
                  <SearchSelectDropdown
                    freeSolo={true}
                    searchedValue={"ddd"}
                    size="small"
                    label="Search ICD 10 Code"
                    startIcon={
                      <img
                        alt="search-icon"
                        src={searchIcon}
                        width={"16px"}
                        height={"16ppx"}
                      />
                    }
                    options={[
                      { label: "Headache", value: "Headache" },
                      { label: "Stomachache", value: "Stomacheache" },
                    ]}
                  />
                </div>
              </div>

              <div className="overflow-auto mb-2 mt-6 max-h-[350px]">
                <Table columns={ICDCodeColumns} rows={[1, 2, 3]} />
              </div>

              {/* Assessment Description */}
              <div className="mt-6">
                <Input
                  rows={3}
                  maxWords={250}
                  placeholder={"Enter Assessment Description"}
                  multiline
                  size="small"
                  name="assessmentDescription"
                  value={formFieldData.assessmentDescription}
                  onChangeCb={(e: any) => {
                    setFormFieldData((prevData: any) => ({
                      ...prevData,
                      assessmentDescription: e?.target?.value,
                    }));
                  }}
                />
              </div>
              {/* Plan */}
              <div className="mt-6">
                <Heading
                  title="Plan"
                  customStyle={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#565656",
                    marginBottom: "8px",
                  }}
                />
                <Input
                  rows={3}
                  placeholder="Enter Plan"
                  multiline
                  name="plan"
                  size="small"
                  maxWords={250}
                  value={formFieldData.plan}
                  onChangeCb={(e: any) => {
                    console.log(formFieldData?.plan);

                    setFormFieldData((prevData: any) => ({
                      ...prevData,
                      plan: e?.target?.value,
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER BUTTONS */}
        <div
          className={`flex ${deviceType === "mobile" ? "justify-center gap-2" : "justify-end"} float-end gap-4 whitespace-wrap`}
        >
          <Button
            label="Cancel"
            variant="outlined"
            onClickCb={() => {}}
            style={{
              paddingTop: "6px",
              paddingBottom: "6px",
              backgroundColor: "white",
              border: "none",
              color: "#393939",
            }}
          ></Button>
          <Button
            label="Save as Draft"
            variant="outlined"
            onClickCb={() => {}}
            style={{
              paddingTop: "6px",
              paddingBottom: "6px",
              backgroundColor: "white",
              border: "none",
              color: "#393939",
            }}
          ></Button>
          <Button
            label="Proceed to Discharge"
            variant="contained"
            onClickCb={() => {
              setOpenDischargeForm(true);
            }}
            style={{
              paddingTop: "6px",
              paddingBottom: "6px",
              minWidth: "155px",
            }}
          ></Button>
        </div>
      </div>
      <DischargeFormPreviewModel
        open={openDischargeForm}
        handleCloseModel={() => setOpenDischargeForm(false)}
      />
    </WrapperCard>
  );
};

export default NurseCareVisitFlow;
