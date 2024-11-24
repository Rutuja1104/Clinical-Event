import * as React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";

type InputPropsType = {
  label?: string;
  error?: boolean;
  helperText?: string;
  type?: string;
  onChangeCb?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string;
  name?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: "small" | "medium";
  placeholder?: string;
  style?: Record<string, string>;
  textFieldLabel?: any;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  isStarPresent?: boolean;
  maxWords?: number;
  onBlur?: (e: any) => void;
};

export default function Input({
  name = "",
  label = "",
  textFieldLabel = "",
  type = "text",
  error = false,
  helperText = "",
  placeholder = "",
  isStarPresent = false,
  onChangeCb = () => {
    /* no-op */
  },
  disabled = false,
  value = "",
  startIcon,
  endIcon,
  size = "medium",
  style = {},
  required = false,
  multiline = false,
  rows = 2,
  maxWords,
  onBlur = (e) => {},
}: InputPropsType) {
  const [inputValue, setInputValue] = React.useState(value || "");
  const [wordCount, setWordCount] = React.useState(
    inputValue.trim() ? inputValue.trim().split(/\s+/).length : 0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const words = inputText.trim().split(/\s+/).filter(Boolean);

    if (!maxWords || words.length <= maxWords) {
      setInputValue(inputText);
      setWordCount(words.length);
      if (onChangeCb) onChangeCb(e);
    }
  };

  return (
    <div className="flex flex-col items-start w-full h-full">
      {label && (
        <label className="font-weight-500 font-size-16px color-212D30 mb-3">
          {label}
        </label>
      )}
      <TextField
        label={
          textFieldLabel ? (
            <>
              {textFieldLabel}{" "}
              {isStarPresent && <span style={{ color: "#CE0718" }}>*</span>}
            </>
          ) : undefined
        }
        className="w-full"
        name={name}
        type={type}
        rows={rows}
        variant="outlined"
        error={error}
        helperText={helperText}
        placeholder={placeholder}
        onChange={handleInputChange}
        disabled={disabled}
        value={inputValue}
        multiline={multiline}
        size={size}
        onBlur={onBlur}
        slotProps={{
          input: {
            ...(startIcon
              ? {
                  startAdornment: (
                    <InputAdornment position="start">
                      {startIcon}
                    </InputAdornment>
                  ),
                }
              : {}),
            ...(endIcon
              ? {
                  endAdornment: (
                    <InputAdornment position="start">{endIcon}</InputAdornment>
                  ),
                }
              : maxWords
                ? {
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{ alignSelf: "flex-end", mr: 1 }}
                      >
                        <Box
                          sx={{
                            fontSize: "0.75rem",
                            color: wordCount > maxWords ? "#CE0718" : "#888",
                          }}
                        >
                          {wordCount}/{maxWords}
                        </Box>
                      </InputAdornment>
                    ),
                  }
                : null),
          },
        }}
        style={style}
        required={required}
      />
    </div>
  );
}
