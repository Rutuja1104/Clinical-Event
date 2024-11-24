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
import SaveTriageDialog from "./SaveTriageDialog";

const SelfCareVisitFlow = () => {
  const deviceType = useDeviceType();
  const [openSaveTriageDialog, setOpenSaveTriageDialog] = useState(false);
  const [openDischargeForm, setOpenDischargeForm] = useState(false);

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
      field: "code",
      label: <div>Code</div>,
      renderLogic: (row: any) => {
        return <p className="text-primary-main font-normal">R51.H</p>;
      },
    },
    {
      field: "details",
      label: <div className="w-[70vw]">Details</div>,
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
        <div className="flex flex-col justify-between gap-3">
          <Heading title="Visit Note" customStyle={{ color: "#1D1D1D" }} />
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
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <Heading
                title="Chief Complaint"
                customStyle={{ fontSize: "16px" }}
              />
              <img
                alt="edit-icon"
                src={editIconInBox}
                width={"36px"}
                height={"36px"}
                className="cursor-pointer"
                onClick={() => {
                  setOpenSaveTriageDialog(true);
                }}
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
                Lorem ipsum dolor sit amet consectetur. Enim vestibulum a tortor
                egestas dui sit. Magna nunc a facilisis pulvinar orci.
                Ullamcorper pellentesque mauris cras nulla nec vehicula. Morbi
                dictum vel sed iaculis sit mattis blandit rhoncus.
              </div>
            </div>
            <div className="mt-4">
              <Heading title="Diagnosis" customStyle={{ fontSize: "16px" }} />
              <div className="mt-6">
                <SearchSelectDropdown
                  freeSolo={true}
                  searchedValue={"ddd"}
                  size="small"
                  label="Search ICD 10 or DSM Code"
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

            <div className="overflow-auto mb-2 mt-6 min-h-[350px] max-h-[350px]">
              <Table columns={ICDCodeColumns} rows={[1, 2, 3, 4, 5, 6, 7]} />
            </div>
          </div>
        </div>
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
      <SaveTriageDialog
        open={openSaveTriageDialog}
        handleCloseDialog={() => {
          setOpenSaveTriageDialog(false);
        }}
      />
    </WrapperCard>
  );
};

export default SelfCareVisitFlow;
