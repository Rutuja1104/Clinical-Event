import React from "react";

interface VitalsCardProps {
  title: string;
  label: string;
  temperature: number;
  unit: string;
}

const EventEHRVitalsCard = ({
  title,
  label,
  temperature,
  unit,
}: VitalsCardProps) => {
  return (
    <>
      <div className="w-[268px] border-[0.5px] bg-white border-[#979797] rounded-[8px] pt-3 pr-4 pb-3 pl-4 gap-[8px] flex flex-col">
        <div className="gap-[4px] flex justify-between items-center">
          <span className="font-medium text-xs leading-[14.4px] text-[#727272]">
            {title}
          </span>
          <span className="rounded-[16px] border-[0.5px] border-[#42D75B] bg-[#F4FFF2] text-[#016A1C] pt-1 pr-2 pb-1 pl-2 text-[10px] leading-[10px] text-center tracking-[0.2%] font-medium">
            {label}
          </span>
        </div>
        <div className="space-x-1 flex justify-start items-center gap-0">
          <div className=" font-semibold text-lg text-[#565656] leading-[21.6px]">
            {temperature}
          </div>
          <div className="font-medium text-xs text-[#727272] leading-[14.4px]">
            {unit}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventEHRVitalsCard;
