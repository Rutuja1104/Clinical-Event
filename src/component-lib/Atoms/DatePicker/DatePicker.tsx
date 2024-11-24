import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DatePickerWrapper } from "@mui/x-date-pickers/DatePicker";
import moment, { Moment } from "moment";

type DatePickerPropsType = {
  name?: string;
  label?: string | undefined;
  value?: any;
  onChangeCb?: (value: Moment | null) => void;
  style?: Record<string, string>;
  error?: boolean;
  helperText?: string;
  isStarPresent?: boolean;
  onBlur?: (e: any) => any;
};

export default function DatePicker({
  name,
  label,
  value,
  onChangeCb = () => {
    /* no-op */
  },
  style = {},
  error = false,
  helperText,
  isStarPresent = false,
  onBlur = (e) => {},
}: DatePickerPropsType) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePickerWrapper
        name={name}
        label={
          <>
            {label}{" "}
            {isStarPresent && <span style={{ color: "#CE0718" }}>*</span>}
          </>
        }
        value={value}
        slotProps={{
          textField: {
            size: "small",
            fullWidth: true,
            error: error,
            helperText: helperText,
            onBlur: onBlur,
          },
        }}
        onChange={onChangeCb}
        sx={style}
      />
    </LocalizationProvider>
  );
}
