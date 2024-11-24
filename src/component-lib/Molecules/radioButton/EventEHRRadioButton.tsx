import React, { useState } from "react";

interface RadioButtonProps {
  optionList: any;
  selectedValue: string;
  name: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  labelCustomStyle?: any;
  handleOnChange: (value: any) => void;
}

const EventEHRRadioButton = ({
  optionList,
  selectedValue,
  name,
  style,
  disabled = false,
  labelCustomStyle,
  handleOnChange,
}: RadioButtonProps) => {
  const [selected, setSelected] = useState(selectedValue);

  return (
    <div className="space-x-5" style={style}>
      {optionList.map((option: any) => (
        <label
          key={option.value}
          className="h-[24px] space-x-1 items-center cursor-pointer"
        >
          <span className="w-[24px] h-[24px]">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selected === option.value}
              onChange={() => {
                handleOnChange(option.value);
                setSelected(option.value);
              }}
              disabled={disabled}
              className="w-[20px] h-[20px] top-[2px] left-[2px] border-[#95929E] accent-[#005596] cursor-pointer"
            />
          </span>
          <span
            className={`h-[19px] font-medium text-[16px] leading-[19.2px] text-[#565656] items-center justify-center text-center bottom-1 relative ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            style={labelCustomStyle}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default EventEHRRadioButton;
