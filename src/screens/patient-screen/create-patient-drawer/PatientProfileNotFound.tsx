import Heading from "../../../component-lib/Atoms/heading/EventEHRHeading";
import Button from "../../../component-lib/Molecules/button/Button";
import useDeviceType from "../../../custom-hooks/DeviceType";

const PatientProfileNotFound = () => {
  const deviceType = useDeviceType();
  return (
    <div className="w-full flex flex-col items-center py-6 gap-4">
      <Heading
        title="No Result Found"
        customStyle={{ fontWeight: "500", color: "#565656" }}
      />
      <p
        className={`text-neutral-50 text-sm font-normal text-center ${deviceType === "mobile" ? "px-3" : ""}`}
      >
        No scout with BSA ID "
        <span className="text-neutral-70 text-sm font-medium">11081185</span>"
        is available on Camp Doc
      </p>
      <Button
        label="Add New Patient"
        variant="outlined"
        onClickCb={() => {}}
        style={{
          padding: "10px 16px",
          border: "1px solid #005596",
          fontSize: "16px",
          fontWeight: "500",
          boxShadow: "none",
        }}
      ></Button>
    </div>
  );
};

export default PatientProfileNotFound;
