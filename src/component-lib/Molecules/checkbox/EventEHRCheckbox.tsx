import React, { useState } from "react";

interface CheckboxProps {
  optionList: any;
  disabled?: boolean;
  style?: React.CSSProperties;
  customLabelStyle?: any;
}

const EventEHRCheckbox = ({
  optionList,
  style,
  disabled = false,
  customLabelStyle = {},
}: CheckboxProps) => {
  const [selectedValues, setSelectedValues] = useState(
    optionList.map(() => false)
  );

  const handleChange = (index: number) => {
    setSelectedValues((prevSelected: any) =>
      prevSelected.map((value: boolean, i: number) =>
        i === index ? !value : value
      )
    );
  };

  return (
    <div className="space-x-5" style={style}>
      {optionList.map((option: any, index: number) => (
        <div className=" space-x-2 items-center cursor-pointer flex ">
          <div className="w-[24px] ">
            <input
              type="checkbox"
              value={option.value}
              checked={selectedValues[index]}
              onChange={() => handleChange(index)}
              disabled={disabled}
              className="w-[20px] h-[20px] top-[2px] left-[2px] border rounded-md border-[#95929E] accent-[#005596] cursor-pointer"
            />
          </div>
          <div
            className={`font-medium text-[16px] leading-[19.2px]  text-[#565656] items-center justify-center text-start bottom-1 relative ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            style={customLabelStyle}
          >
            {option.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventEHRCheckbox;
