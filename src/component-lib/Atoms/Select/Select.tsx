import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

type LabelValuePairType = {
  label: string;
  value: string;
};

type SelectDropdownPropsType = {
  name?: string;
  options?: LabelValuePairType[] | [];
  onChangeCb?: (e: SelectChangeEvent<string>) => void;
  value?: string;
  label?: string;
  size?: any;
  error?: boolean;
  helperText?: string;
  isStarPresent?: boolean;
  displayEmpty?: boolean;
  placeholderValue?: string; // if you use this you need displayEmpty true property
  onBlur?: (e: any) => void;
};

const SelectDropdown = ({
  name = "",
  label = "",
  value = "",
  options = [],
  isStarPresent = false,
  displayEmpty = false,
  placeholderValue,
  onChangeCb = () => {
    /* no-op */
  },
  size = "small",
  error = false,
  helperText,
  onBlur = (e) => {},
}: SelectDropdownPropsType) => {
  return (
    <Box sx={{ width: "100%", minWidth: 120 }}>
      <FormControl fullWidth size={size} error={error}>
        <InputLabel>
          {label} {isStarPresent && <span style={{ color: "#CE0718" }}>*</span>}
        </InputLabel>
        <Select
          name={name}
          value={value}
          displayEmpty={displayEmpty}
          label={label}
          onChange={onChangeCb}
          onBlur={onBlur}
          sx={{
            color: value === "" ? "#717C7E" : "", // Gray for placeholder, black for selected
          }}
        >
          {placeholderValue && (
            <MenuItem value="" disabled sx={{ color: "#717C7E" }}>
              {placeholderValue}
            </MenuItem>
          )}
          {options.length ? (
            options.map((item) => {
              return (
                <MenuItem key={item?.value} value={item.value}>
                  {item.label}
                </MenuItem>
              );
            })
          ) : (
            <MenuItem value="">
              <em>No data found</em>
            </MenuItem>
          )}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default SelectDropdown;
