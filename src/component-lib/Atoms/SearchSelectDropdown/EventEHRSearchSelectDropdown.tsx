import Autocomplete from "@mui/material/Autocomplete";
import { searchIcon } from "../../../assets";
import { ReactNode } from "react";
import { InputAdornment, TextField } from "@mui/material";

type LabelValuePairType = {
  label: string;
  value: string;
};

type SearchSelectDropdownPropsType = {
  options?: LabelValuePairType[] | [];
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  freeSolo?: boolean;
  searchedValue?: string;
  size?: "small" | "medium";
  onSearchValueChangeCb?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: Record<string, string>;
};

const SearchSelectDropdown = ({
  options = [],
  label = "",
  startIcon,
  endIcon,
  freeSolo = false,
  searchedValue = "",
  onSearchValueChangeCb = () => {},
  size = "medium",
  style = {},
}: SearchSelectDropdownPropsType) => {
  return (
    <Autocomplete
      disablePortal
      freeSolo={freeSolo}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          // label={label}
          value={searchedValue}
          size={size}
          placeholder={label} // This sets the placeholder
          onChange={onSearchValueChangeCb}
          slotProps={{
            input: {
              ...params.InputProps,
              ...(startIcon
                ? {
                    startAdornment: (
                      <InputAdornment
                        style={{
                          paddingLeft: "10px",
                          marginRight: "0",
                          cursor: "pointer",
                        }}
                        position="start"
                      >
                        {startIcon}
                      </InputAdornment>
                    ),
                  }
                : {}),
              ...(endIcon
                ? {
                    endAdornment: (
                      <InputAdornment position="start">
                        {endIcon}
                      </InputAdornment>
                    ),
                  }
                : {}),
            },
          }}
          sx={style}
        />
      )}
    />
  );
};

export default SearchSelectDropdown;
