import { useState } from "react";
import {
  deleteIcon,
  dummyAvatar,
  editIconInBox,
  plusBlueIcon,
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

const PhysicianCareVisitFlow = () => {
  const deviceType = useDeviceType();
  const [openDischargeForm, setOpenDischargeForm] = useState(false);

  const [formFieldData, setFormFieldData] = useState({
    presentIllnessHistory: "",
    objectiveNote: "",
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
                    // marginBottom: "8px",
                  }}
                />
              </div>
              {/* Description */}
              <div className="mt-4">
                <Heading
                  title="Objective Note"
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
                  placeholder="Enter Objective Note"
                  multiline
                  name="description"
                  value={formFieldData.objectiveNote}
                  onChangeCb={(e: any) => {
                    setFormFieldData((prevData: any) => ({
                      ...prevData,
                      objectiveNote: e?.target?.value,
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
                    label="Search ICD 10 Code or DSM Code"
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
              {/* Order */}
              <div className="mt-6">
                <Heading
                  title="Order"
                  customStyle={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#-",
                    marginBottom: "8px",
                  }}
                />

                <div
                  className="pt-6 pb-6 flex flex-col justify-center items-center gap-4"
                  style={{ background: "#F4F4F4", borderRadius: "4px" }}
                >
                  <div className="font-weight-500 font-size-18px color-565656">
                    {" "}
                    No Order Found
                  </div>
                  <Button
                    startIcon={<img alt="add icon" src={plusBlueIcon} />}
                    variant={"contained"}
                    style={{
                      background: "#E4F3FF",
                      color: "#005596",
                      padding: "7px 16px",
                    }}
                    onClickCb={() => {}}
                    label="Create Order"
                  />
                </div>
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
          className={`flex ${deviceType === "mobile" ? "justify-center gap-2" : "justify-end"} float-end gap-4 whitespace-nowrap`}
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
            variant={"contained"}
            style={{
              background: "#E4F3FF",
              color: "#005596",
              padding: "7px 16px",
            }}
            onClickCb={() => {}}
            label="Transfer"
          />
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

export default PhysicianCareVisitFlow;
