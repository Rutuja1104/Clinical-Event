import Input from "./Input";

const formatPhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/\D/g, "");

  if (phoneNumber.length < 4) {
    return phoneNumber;
  } else if (phoneNumber.length < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  } else {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  }
};

type ContactInputPropsType = {
  label?: string;
  error?: boolean;
  helperText?: string;
  type?: string;
  onChangeCb?: (e: string) => void;
  disabled?: boolean;
  value?: string;
  name?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: "small" | "medium";
  placeholder?: string;
  style?: Record<string, string>;
  textFieldLabel?: string;
  required?: boolean;
  onBlur?: (e: any) => void;
};

const ContactInput = ({
  name,
  type,
  label,
  textFieldLabel,
  value,
  onChangeCb = () => {},
  size,
  error,
  helperText,
  startIcon,
  endIcon,
  style,
  onBlur = (e) => {},
}: ContactInputPropsType) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value);
    onChangeCb(formattedPhoneNumber);
  };

  return (
    <Input
      onBlur={onBlur}
      name={name}
      type={type}
      textFieldLabel={textFieldLabel}
      label={label}
      value={value}
      onChangeCb={handleChange}
      size={size}
      error={error}
      helperText={helperText}
      startIcon={startIcon}
      endIcon={endIcon}
      style={style}
    />
  );
};

export default ContactInput;
