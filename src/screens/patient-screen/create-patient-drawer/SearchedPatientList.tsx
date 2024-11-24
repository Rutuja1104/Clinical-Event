import Table from "../../../component-lib/Organisms/table/EventEHRTable";

const SearchedPatientList = () => {
  const patientColumns = [
    {
      field: "patientName",
      label: <div>Patient Name</div>,
      renderLogic: (row: any) => {
        return <p className="text-primary-main  font-normal">Michael Doe</p>;
      },
    },
    {
      field: "basId",
      label: <div>BSA ID</div>,
      renderLogic: (row: any) => {
        return <p className="font-medium text-neutral-90">11081197</p>;
      },
    },
    {
      field: "contactNumber",
      label: <div>Contact Number</div>,
      renderLogic: (row: any) => {
        return <p className="text-neutral-90 font-normal">202-555-0137</p>;
      },
    },
  ];

  return (
    <div>
      <Table columns={patientColumns} rows={[2, 3, 4, 5]} />
    </div>
  );
};

export default SearchedPatientList;
