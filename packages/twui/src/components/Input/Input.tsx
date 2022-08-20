import { HTMLProps, ReactNode, useState } from "react";
import { useTheme } from "../../theme";
import { TUIClass } from "../../types";
import { tw } from "../../utils";
import { InputAdornment, InputAdornmentSX } from "../InputAdornment";

export type InputSX = {
  root?: TUIClass;
  input?: TUIClass;
  startAdornment?: InputAdornmentSX;
  endAdornment?: InputAdornmentSX;
};

export interface InputVariants {
  default: true;
}

export type InputProps = HTMLProps<HTMLInputElement> & {
  variant?: keyof InputVariants;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  classes?: InputSX;
};

const defaultClasses = {
  root: "border border-gray-300 flex items-center focus-within:border-blue-600",
  input: "p-2 w-full bg-transparent block border-none focus:outline-none",
};

export const Input: React.FC<InputProps> = ({
  variant = "default",
  ...props
}) => {
  //Merge theme with instance props
  const theme = useTheme();
  const { startAdornment, endAdornment, classes, ...inputProps } = {
    ...theme?.components?.Input?.[variant],
    ...props,
  };

  const [value, setValue] = useState("");

  //Track data attributes that can be targeted with custom tw variants
  const dataAttributes = {
    "data-has-text": Boolean(value),
  };

  return (
    <div {...dataAttributes} className={tw(defaultClasses.root, classes?.root)}>
      {startAdornment && (
        <InputAdornment
          {...dataAttributes}
          classes={{ ...classes?.startAdornment }}
        >
          {startAdornment}
        </InputAdornment>
      )}
      <input
        {...dataAttributes}
        value={value}
        onChange={(e) => setValue(e.target?.value)}
        className={tw(defaultClasses?.input, classes?.input)}
        {...inputProps}
      />
      {endAdornment && (
        <InputAdornment
          {...dataAttributes}
          classes={{ ...classes?.endAdornment }}
        >
          {endAdornment}
        </InputAdornment>
      )}
    </div>
  );
};
