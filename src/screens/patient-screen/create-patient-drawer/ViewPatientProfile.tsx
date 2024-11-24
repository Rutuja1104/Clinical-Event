import { profileImage } from "../../../assets";
import Button from "../../../component-lib/Molecules/button/Button";
import useDeviceType from "../../../custom-hooks/DeviceType";

const ViewPatientProfile = () => {
  const deviceType = useDeviceType();

  const patientInfoColumn1: Record<string, string> = {
    "Full Name": "Mary Jane",
    "Date of Birth": "18/10/2024",
    "Jamboree Unit Number": "A586",
    "Contact Number": "(255) 455 9999",
  };

  const patientInfoColumn2: Record<string, string> = {
    "BSA ID": "11081562",
    Gender: "Male",
    "Jamboree Unit Leader Name": "Jack Williams",
    "Base Camp": "Charlie Camp",
  };

  return (
    <>
      <div
        className={`${deviceType === "mobile" ? "flex flex-col items-center" : "flex"} gap-5 px-4`}
      >
        <img
          src={profileImage}
          alt={"profile image"}
          className="cursor-pointer w-[70px] h-[70px]"
        ></img>
        <div className="w-full flex p-3">
          <div className="w-[50%] flex flex-col gap-[14px]">
            {Object.keys(patientInfoColumn1).map((key: string) => {
              return (
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-neutral-60">{key}</p>
                  <p className="text-sm font-normal">
                    {patientInfoColumn1[key]}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-[50%] flex flex-col gap-[14px]">
            {Object.keys(patientInfoColumn2).map((key: string) => {
              return (
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-neutral-60">{key}</p>
                  <p className="text-sm font-normal">
                    {patientInfoColumn2[key]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex w-full pt-4 gap-4">
        <Button
          label="View Profile"
          variant="contained"
          onClickCb={() => {}}
          style={{
            padding: "12px 20px",
            width: "50%",
            backgroundColor: "white",
            border: "1px solid #D2D2D2",
            color: "#393939",
            fontSize: "16px",
            fontWeight: "500",
            boxShadow: "none",
          }}
        ></Button>
        <Button
          label="Create Visit"
          variant="contained"
          onClickCb={() => {}}
          style={{
            padding: "12px 20px",
            width: "50%",
            backgroundColor: "white",
            border: "1px solid #D2D2D2",
            color: "#393939",
            fontSize: "16px",
            fontWeight: "500",
            boxShadow: "none",
          }}
        ></Button>
      </div>
    </>
  );
};

export default ViewPatientProfile;
