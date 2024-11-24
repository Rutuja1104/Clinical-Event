import React, { useState } from "react";
import WrapperCard from "../../../component-lib/Atoms/card/EventEHRWrapperCard";
import useDeviceType from "../../../custom-hooks/DeviceType";
import Heading from "../../../component-lib/Atoms/heading/EventEHRHeading";
import Button from "../../../component-lib/Molecules/button/Button";
import {
  assignedDot,
  completedDot,
  dummyAvatar,
  editIconInBox,
  verifiedDot,
} from "../../../assets";
import EventEHRTabs from "../../../component-lib/Molecules/tabs/EventEHRTabs";
import Table from "../../../component-lib/Organisms/table/EventEHRTable";
import EventEHRHeading from "../../../component-lib/Atoms/heading/EventEHRHeading";
import EventEHRContactInformationCard from "../../../component-lib/Molecules/contact-information-card/EventEHRContactInformationCard";
import EventEHRCreateVisitDialog from "../../../component-lib/Organisms/create-visit-dialog/EventEHRCreateVisitDialog";
import EventEHREditProfileDialog from "../../../component-lib/Organisms/edit-profile-dialog/EventEHREditProfileDialog";
import MenuDropdown from "../../../component-lib/Molecules/menuDropdown/MenuDropdown";
import { useNavigate } from "react-router-dom";

const PatientDetailsScreen = () => {
  const navigate = useNavigate();
  const deviceType = useDeviceType();
  const [selectedTab, setSelectedTab] = useState("healthHistory");
  const [openCreateVisitDialog, setOpenCreateVisitDialog] = useState(false);
  const [openEditProfileDialog, setOpenEditProfileDialog] = useState(false);

  const adjustedGrid =
    deviceType === "tablet" || deviceType === "small-tablet"
      ? "1fr 1fr"
      : deviceType === "mobile"
        ? "1fr"
        : "1fr 1fr 1fr 1fr";
  const adjustedWidth =
    deviceType === "tablet" ||
    deviceType === "small-tablet" ||
    deviceType === "mobile";

  // PATIENT  DATA
  const patientDetails = [
    {
      label: "Full Name",
      value: "Andrew",
    },
    {
      label: "Last Name",
      value: "Roberts",
    },
    {
      label: "Email",
      value: "andrew.roberts@gmail.com",
    },
    {
      label: "Contact Number",
      value: "(480) 555-0103",
    },
    {
      label: "BSA ID",
      value: "11081988",
    },
    {
      label: "Date of Birth",
      value: "22/12/2015",
    },
    { label: "Jamboree Unit Number", value: "A251" },
    {
      label: "Jamboree Unit Leader Name",
      value: "Dwane Johnson",
    },
  ];

  // VISIT TAB COLUMN DATA
  const patientVisitTabColumns = [
    {
      field: "Visit Date",
      label: <div>Visit Date</div>,
      renderLogic: (row: any) => {
        return (
          <p className=" text-primary-main font-normal font-weight-500">
            {row?.date}
          </p>
        );
      },
    },
    {
      field: "Visit Type",
      label: <div>Visit Type</div>,
      renderLogic: (row: any) => {
        return <p className=" text-neutral-90 font-normal">{row?.type}</p>;
      },
    },
    {
      field: "chiefComplaint",
      label: <div>Chief Complaint</div>,
      renderLogic: (row: any) => {
        return (
          <p
            style={{
              width: "auto",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            className="text-neutral-90 cursor-pointer"
            onClick={() => {
              // navigate(`/patient/${row}`);
            }}
          >
            {row?.chiefComplaint}
          </p>
        );
      },
    },
    {
      field: "typeOfCare",
      label: <div>Type of Care</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">{row?.care}</p>;
      },
    },
    {
      field: "visitLocation",
      label: <div>Visit Location</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">{row?.baseCamp}</p>;
      },
    },
    {
      field: "Status",
      label: <div>Status</div>,
      renderLogic: (row: any) => {
        return (
          <div className="text-neutral-90 font-normal flex justify-start gap-1 items-center">
            <span
              className="font-weight-400 font-size-12px flex gap-1"
              style={{
                color:
                  row?.status === "Discharged"
                    ? "#016A1C"
                    : row?.status === "Transfered to Hsc"
                      ? "#BA5900"
                      : row?.status === "Assigned"
                        ? "#003B8D"
                        : "",
                background:
                  row?.status === "Discharged"
                    ? "#F4FFF2"
                    : row?.status === "Transfered to Hsc"
                      ? "#FFFBF2"
                      : row?.status === "Assigned"
                        ? "#F2F7FF"
                        : "",
                borderRadius: "46px",
                padding: "4px 12px",
              }}
            >
              <img src={completedDot} alt={row?.status} />
              {row?.status}
            </span>
          </div>
        );
      },
    },
    {
      field: "action",
      label: <div>Action</div>,
      renderLogic: (row: any) => {
        return (
          <>
            <div className="flex items-center">
              <MenuDropdown
                options={[
                  {
                    label: "View Visit Note",
                    onClickCb: () => {
                      if (row?.care === "Self Care") {
                        navigate(`view-self-care-visit-note/${row?.id}`);
                      } else if (row?.care === "Nurse Care") {
                        navigate(`view-nurse-care-visit-note/${row?.id}`);
                      } else if (row?.care === "physician-care") {
                        navigate(`view-physician-care-visit-note/${row?.id}`);
                      }
                    },
                  },
                ]}
              />
            </div>
          </>
        );
      },
    },
  ];

  // VISIT TAB ROW DATA
  const visitTabRowData = [
    {
      id: "111",
      date: "15/08/23",
      type: "Walk In",
      status: "Discharged",
      chiefComplaint:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
      care: "Nurse Care",
      baseCamp: "Base Camp 1",
    },
    {
      id: "222",
      date: "15/08/23",
      type: "Walk In",
      status: "Discharged",
      chiefComplaint:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
      care: "physician-care",
      baseCamp: "Base Camp 1",
    },
    {
      id: "333",
      date: "15/08/23",
      type: "Walk In",
      chiefComplaint:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
      care: "Self Care",
      status: "Discharged",
      baseCamp: "Base Camp 1",
    },
    {
      id: "444",
      date: "15/08/23",
      type: "Walk In",
      chiefComplaint:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
      care: "Self Care",
      status: "Discharged",
      baseCamp: "Base Camp 1",
    },
    {
      id: "555",
      date: "15/08/23",
      type: "Walk In",
      chiefComplaint:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
      care: "Self Care",
      status: "Discharged",
      baseCamp: "Base Camp 1",
    },
  ];

  // VISIT TAB COLUMN DATA
  const patientOrdersTabColumns = [
    {
      field: "ordersDate",
      label: <div>Order Date</div>,
      renderLogic: (row: any) => {
        return (
          <p className=" text-primary-main font-normal font-weight-500">
            {row?.orderDate}
          </p>
        );
      },
    },
    {
      field: "orderType",
      label: <div>Order Type</div>,
      renderLogic: (row: any) => {
        return (
          <p className="text-neutral-90 cursor-pointer" onClick={() => {}}>
            {row?.orderType}
          </p>
        );
      },
    },
    {
      field: "medicationName",
      label: <div>Item/Medication Name</div>,
      renderLogic: (row: any) => {
        return (
          <p className="text-neutral-90 font-normal">{row?.medicationName}</p>
        );
      },
    },
    {
      field: "orderedStatus",
      label: <div>Order Status</div>,
      renderLogic: (row: any) => {
        return (
          <div className="text-neutral-90 font-normal flex justify-start gap-1 items-center">
            <span
              className="font-weight-400 font-size-12px flex gap-1"
              style={{
                color:
                  row?.orderStatus === "Completed"
                    ? "#016A1C"
                    : row?.orderStatus === "Verified"
                      ? "#BA5900"
                      : row?.orderStatus === "Assigned"
                        ? "#003B8D"
                        : "",
                background:
                  row?.orderStatus === "Completed"
                    ? "#F4FFF2"
                    : row?.orderStatus === "Verified"
                      ? "#FFFBF2"
                      : row?.orderStatus === "Assigned"
                        ? "#F2F7FF"
                        : "",
                borderRadius: "46px",
                padding: "4px 12px",
              }}
            >
              <img
                src={
                  row?.orderStatus === "Completed"
                    ? completedDot
                    : row?.orderStatus === "Verified"
                      ? verifiedDot
                      : row?.orderStatus === "Assigned"
                        ? assignedDot
                        : ""
                }
                alt="completed"
              />
              {row?.orderStatus}
            </span>
          </div>
        );
      },
    },
    {
      field: "orderedBy",
      label: <div>Ordered By</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">{row?.orderedBy}</p>;
      },
    },
    {
      field: "action",
      label: <div>Action</div>,
      renderLogic: (row: any) => {
        return (
          <>
            <div className="flex items-center">
              {/* <MenuDropdown
                  options={[
                    {
                      label: "View Patient",
                      onClickCb: () => {
                        // navigate(`/patient/${row}`);
                      },
                    },
                  ]}
                /> */}
            </div>
          </>
        );
      },
    },
  ];

  // VISIT TAB ROW DATA
  const ordersTabRowData = [
    {
      orderDate: "15/08/2023",
      orderStatus: "Completed",
      medicationName: "Ibuprofen",
      orderedBy: "Dr. Jane Doe",
      orderType: "Medication",
    },

    {
      orderDate: "15/08/2023",
      orderStatus: "Completed",
      medicationName: "Ibuprofen",
      orderedBy: "Dr. Jane Doe",
      orderType: "Medication",
    },
    {
      orderDate: "15/08/2023",
      orderStatus: "Verified",
      medicationName: "Ibuprofen",
      orderedBy: "Dr. Jane Doe",
      orderType: "Medication",
    },
    {
      orderDate: "15/08/2023",
      orderStatus: "Verified",
      medicationName: "Ibuprofen",
      orderedBy: "Dr. Jane Doe",
      orderType: "Medication",
    },
    {
      orderDate: "15/08/2023",
      orderStatus: "Assigned",
      medicationName: "Ibuprofen",
      orderedBy: "Dr. Jane Doe",
      orderType: "Medication",
    },
    {
      orderDate: "15/08/2023",
      medicationName: "Ibuprofen",
      orderedBy: "Dr. Jane Doe",
      orderType: "Medication",
      orderStatus: "Completed",
    },
  ];

  return (
    <WrapperCard
      customClasses="m-3 p-3 pl-4 pr-4 h-[calc(100vh-97px)]"
      customStyle={{ minWidth: deviceType !== "mobile" ? "400px" : "" }}
    >
      <div className="flex flex-col gap-3">
        <div className={`flex items-center justify-between w-full`}>
          <Heading title="Profile" />

          <Button
            label="Create Visit"
            variant="contained"
            onClickCb={() => {
              setOpenCreateVisitDialog(true);
            }}
            style={{
              padding: "6px 17px",
            }}
          ></Button>
        </div>
        <div style={{ overflow: "auto", height: "calc(100vh - 217px)" }}>
          <div
            className="flex justify-center items-start background-color-F1F1F1 border-radius-8px "
            style={{ padding: "20px 28px" }}
          >
            <div
              style={{
                width: adjustedWidth ? "15%" : "10%",
                alignSelf: "center",
              }}
            >
              <div
                className="border-radius-8px "
                style={{
                  width: "90px",
                  height: "90px",
                  border: "2px solid #BCBCBC",
                  display: deviceType === "mobile" ? "none" : "visible",
                }}
              >
                <img
                  className="border-radius-6px"
                  src={dummyAvatar}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            <div
              className="patient-details-card"
              style={{
                width: adjustedWidth ? "85%" : "90%",
                display: "grid",
                gridTemplateColumns: adjustedGrid,
                gap: "24px",
              }}
            >
              {patientDetails?.map((data, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="font-size-14px font-weight-500 color-727272">
                    {data?.label}
                  </div>
                  <div className="color-393939 font-weight-500">
                    {data?.value}
                  </div>
                </div>
              ))}
            </div>
            <div>
              {" "}
              <img
                className="cursor-pointer"
                src={editIconInBox}
                alt="edit-icon"
                onClick={() => {
                  setOpenEditProfileDialog(true);
                }}
              />
            </div>
          </div>
          <div className="mt-3">
            <EventEHRTabs
              defaultSelectedValue={selectedTab}
              tabList={[
                { label: "Health History", value: "healthHistory" },
                { label: "Visits", value: "visits" },
                { label: "Orders", value: "orders" },
                { label: "Emergency Contact Information", value: "eCI" },
              ]}
              onChangeTab={(tab) => {
                setSelectedTab(tab);
              }}
            />
            {/* IF SELECTED TAB IS Health History */}
            {selectedTab === "healthHistory" && (
              <div className="mt-5 tab-main-content-height">
                <div
                  className="flex justify-center items-center flex-col background-color-F1F1F1 border-radius-8px  gap-6"
                  style={{ padding: "60px 28px" }}
                >
                  <div className="font-size-18px font-weight-500 color-565656">
                    Click the button to view health records on CampDoc.
                  </div>
                  <Button
                    label="Open Health History"
                    variant="contained"
                    onClickCb={() => {}}
                    style={{
                      padding: "13px 28px",
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  ></Button>
                </div>
              </div>
            )}

            {/* IF SELECTED TAB IS Visits */}
            {selectedTab === "visits" && (
              <div
                className="mt-5 tab-main-content-height"
                style={{ overflow: "auto" }}
              >
                <Table
                  columns={patientVisitTabColumns}
                  rows={visitTabRowData}
                  paginationProps={{
                    isPagination: true,
                    totalCount: 20,
                    limit: 5,
                    onPageChange: (page: any) => {
                      // dispatch(setPaginationState({ pageNumber: page }));
                    },
                  }}
                />
              </div>
            )}

            {/* IF SELECTED TAB IS Orders */}
            {selectedTab === "orders" && (
              <div
                className="mt-5 tab-main-content-height"
                style={{ overflow: "auto" }}
              >
                <Table
                  columns={patientOrdersTabColumns}
                  rows={ordersTabRowData}
                  paginationProps={{
                    isPagination: true,
                    totalCount: 20,
                    limit: 5,
                    onPageChange: (page: any) => {
                      // dispatch(setPaginationState({ pageNumber: page }));
                    },
                  }}
                />
              </div>
            )}

            {/* IF SELECTED TAB IS Emergency Contact Information */}
            {selectedTab === "eCI" && (
              <div
                className="mt-5 tab-main-content-height"
                style={{ overflow: "auto" }}
              >
                <EventEHRHeading
                  title="Emergency Contact Information"
                  customStyle={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                  }}
                />

                <div className="mt-3">
                  <EventEHRContactInformationCard
                    headingTitle="Primary Contact"
                    contactInfoData={[
                      { label: "Contact Name", value: "Floyd Miles" },
                      { label: "Contact Relation", value: "Father" },
                      {
                        label: "Contact Email",
                        value: "floyd.miles@gmail.com",
                      },
                      { label: "Contact Number", value: "202-555-0119" },
                    ]}
                  />
                </div>
                <div className="mt-5">
                  <EventEHRHeading
                    title="Unit Contact Details"
                    customStyle={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                    }}
                  />
                  <div className="mt-3">
                    <EventEHRContactInformationCard
                      headingTitle="Unit Leader"
                      contactInfoData={[
                        { label: "Unit Number", value: "A252" },
                        { label: "Unit Leader Name", value: "Dwane Johnson" },
                        {
                          label: "Unit Leader Email",
                          value: "dwane@gmail.com",
                        },
                        { label: "Unit Leader Contact", value: "202-555-0119" },
                      ]}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <EventEHRCreateVisitDialog
        dialogHeading="Create Visit"
        isOpen={openCreateVisitDialog}
        handleClose={() => {
          setOpenCreateVisitDialog(false);
        }}
      />

      <EventEHREditProfileDialog
        dialogHeading="Edit Profile"
        isOpen={openEditProfileDialog}
        handleClose={() => {
          setOpenEditProfileDialog(false);
        }}
      />
    </WrapperCard>
  );
};

export default PatientDetailsScreen;
