import React from "react";

interface EventEHRContactInformationCardProps {
  contactInfoData: any;
  headingTitle: string;
}

const EventEHRContactInformationCard = ({
  contactInfoData = [
    { label: "Contact Name", value: "Floyd Miles" },
    { label: "Contact Relation", value: "Father" },
    { label: "Contact Email", value: "floyd.miles@gmail.com" },
    { label: "Contact Number", value: "202-555-0119" },
  ],
  headingTitle = "Primary Contact",
}: EventEHRContactInformationCardProps) => {
  return (
    <div className="max-width-400px border-1px-solid-D2D2D2 border-radius-8px">
      <div className="pt-3 pb-3 pl-4 pr-4 background-color-F4F4F4 border-radius-8px">
        <div className="font-weight-500 font-size-18px color-393939 ">
          {headingTitle}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          width: "fit-content",
        }}
      >
        <div className="p-4 pb-0">
          {contactInfoData?.map((data: any, index: any) => (
            <div
              key={index}
              className="mb-4"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <div className="mr-2 color-727272 font-weight-500 font-size-14px">
                {data?.label}
              </div>
              <div className="color-393939 font-weight-500 font-size-14px">
                : {data?.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventEHRContactInformationCard;
