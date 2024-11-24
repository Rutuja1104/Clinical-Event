import { useState } from "react";
import { crossIcon, profileImage, searchIcon } from "../../../assets";
import Heading from "../../../component-lib/Atoms/heading/EventEHRHeading";
import Input from "../../../component-lib/Atoms/Input/Input";
import Drawer from "../../../component-lib/Organisms/drawer/EventEHRDrawer";
import useDeviceType from "../../../custom-hooks/DeviceType";
import Button from "../../../component-lib/Molecules/button/Button";
import ViewPatientProfile from "./ViewPatientProfile";
import PatientProfileNotFound from "./PatientProfileNotFound";
import CreatePatientForm from "./CreatePatientForm";
import SearchedPatientList from "./SearchedPatientList";

type CreatePatientDrawerPropsType = {
  open: boolean;
  closeCb: () => void;
};

const CreatePatientDrawer = ({
  open,
  closeCb,
}: CreatePatientDrawerPropsType) => {
  const [name, setName] = useState<string>("");
  const deviceType = useDeviceType();

  return (
    <Drawer open={open} onCloseCb={closeCb} style={{ minWidth: "350px" }}>
      <div
        className={`w-[50%] ${deviceType === "mobile" ? "w-full min-w-[350px]" : "min-w-[700px]"}`}
      >
        <div className="flex justify-between py-7 border border-neutral-20 px-6 items-center">
          <Heading title="Create Patient" customStyle={{ fontWeight: "600" }} />
          <img
            src={crossIcon}
            alt={"search"}
            className="cursor-pointer w-[18px] h-[18px]"
            onClick={closeCb}
          />
        </div>
        <div className="flex py-7 px-6 gap-6">
          <Input
            name="Search-patient-name-bsa-id"
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
            placeholder="Search by Name or BSA ID"
          />
          <Button
            label="Search"
            variant="contained"
            onClickCb={closeCb}
            style={{ padding: "6px 20px" }}
          ></Button>
        </div>
        {/* This will beconditionally handle later on */}
        {/* <div className="mx-6 bg-neutral-10 py-4 gap-4">
          <ViewPatientProfile />
          <PatientProfileNotFound/>
        </div> */}
        <div className="mx-6 py-4 h-[calc(100vh-229px)]">
          <CreatePatientForm />
          {/* <SearchedPatientList/> */}
        </div>
      </div>
    </Drawer>
  );
};

export default CreatePatientDrawer;
