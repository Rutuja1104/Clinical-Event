import { useState } from "react";
import WrapperCard from "../../component-lib/Atoms/card/EventEHRWrapperCard";
import Heading from "../../component-lib/Atoms/heading/EventEHRHeading";
import Input from "../../component-lib/Atoms/Input/Input";
import Button from "../../component-lib/Molecules/button/Button";
import Table from "../../component-lib/Organisms/table/EventEHRTable";
import { plusIcon, searchIcon } from "../../assets";
import MenuDropdown from "../../component-lib/Molecules/menuDropdown/MenuDropdown";
import useDeviceType from "../../custom-hooks/DeviceType";
import { useNavigate } from "react-router-dom";

import CreatePatientDrawer from "./create-patient-drawer/CreatePatientDrawer";

const PatientScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const deviceType = useDeviceType();

  const patientColumns = [
    {
      field: "bsaId",
      label: <div>BSA ID</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">110346473</p>;
      },
    },
    {
      field: "patientName",
      label: <div>Patient Name</div>,
      renderLogic: (row: any) => {
        return (
          <p
            className="font-medium text-primary-main cursor-pointer"
            onClick={() => {
              navigate(`/patient/${row}`);
            }}
          >
            Heena West
          </p>
        );
      },
    },
    {
      field: "unitLeaderName",
      label: <div>Unit Leader Name</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">Steve Smith</p>;
      },
    },
    {
      field: "gender",
      label: <div>Gender</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">Male</p>;
      },
    },
    {
      field: "dateOfBirth",
      label: <div>Date Of Birth</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">07/05/2022</p>;
      },
    },
    {
      field: "contactNumber",
      label: <div>Contact Number</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">222-333-4445</p>;
      },
    },
    {
      field: "emergencyContact",
      label: <div>Emergency Contact</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">222-333-4445</p>;
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
                    label: "View Patient",
                    onClickCb: () => {
                      navigate(`/patient/${row}`);
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
  return (
    <WrapperCard
      customClasses="m-3 p-3 h-[calc(100vh-97px)]"
      customStyle={{ minWidth: deviceType !== "mobile" ? "400px" : "" }}
    >
      <div className="flex flex-col h-full gap-3">
        <div
          className={`flex ${deviceType === "mobile" ? "flex-col items-start gap-3" : "items-center"} justify-between w-full`}
        >
          <Heading title="Patient List" customStyle={{ color: "#1D1D1D" }} />

          <div
            className={`flex ${deviceType === "mobile" ? "w-full justify-between" : ""} gap-3`}
          >
            <div>
              <Input
                name="Search-patient"
                startIcon={
                  <img
                    src={searchIcon}
                    alt={"search"}
                    className="cursor-pointer w-[18px] h-[18px]"
                  />
                }
                value={name}
                onChangeCb={(e) => setName(e.target.value)}
                size="small"
                placeholder="Search Patient"
                style={{
                  width: deviceType === "mobile" ? "160px" : "320px",
                  minWidth: "150px",
                }}
              />
            </div>
            <Button
              startIcon={
                <img
                  src={plusIcon}
                  alt={"search"}
                  className="cursor-pointer w-[18px] h-[18px]"
                />
              }
              label="Create Patient"
              variant="contained"
              onClickCb={() => setIsDrawerOpen(true)}
              style={{
                paddingTop: "6px",
                paddingBottom: "6px",
                minWidth: "155px",
              }}
            ></Button>
          </div>
        </div>
        <div style={{ overflow: "auto" }}>
          <Table
            columns={patientColumns}
            rows={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            paginationProps={{
              isPagination: true,
              totalCount: 20,
              limit: 3,
              onPageChange: (page: any) => {
                console.log("onPageChangeCb:", page);

                // dispatch(setPaginationState({pageNumber: page }));
              },
            }}
          />
        </div>
      </div>
      <CreatePatientDrawer
        open={isDrawerOpen}
        closeCb={() => setIsDrawerOpen(false)}
      />
    </WrapperCard>
  );
};

export default PatientScreen;
