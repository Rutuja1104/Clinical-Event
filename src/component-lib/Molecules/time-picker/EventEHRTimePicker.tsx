import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

interface EventEHRTimePickerProps {
  label?: string;
  ampmFormat?: boolean;
  name?: string;
  handleTimeChange?: (e: any) => void;
}

export default function EventEHRTimePicker({
  name = "",
  label = "Your label here",
  ampmFormat = false,
  handleTimeChange,
}: EventEHRTimePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        name="name"
        slotProps={{ textField: { size: "small" } }}
        label={label}
        ampm={ampmFormat}
        onChange={handleTimeChange}
      />
    </LocalizationProvider>
  );
}
