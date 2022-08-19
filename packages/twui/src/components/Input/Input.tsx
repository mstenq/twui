import { HTMLProps, ReactNode } from "react";
import { TUIClass } from "../../types";
import { tw } from "../../utils";
import { InputAdornment, InputAdornmentSX } from "../InputAdornment";

export type InputSX = {
  root?: TUIClass;
  input?: TUIClass;
  startAdornment?: InputAdornmentSX;
  endAdornment?: InputAdornmentSX;
};

const defaultClasses = {
  root: "border border-gray-300 flex items-center focus-within:ring-2",
  input: "p-2 w-full block border-none focus:outline-none",
};

export type InputProps = HTMLProps<HTMLInputElement> & {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  classes?: InputSX;
};

export const Input: React.FC<InputProps> = ({
  startAdornment,
  endAdornment,
  classes,
  ...inputProps
}) => {
  return (
    <div className={tw(defaultClasses.root, classes?.root)}>
      {startAdornment && (
        <InputAdornment classes={{ ...classes?.startAdornment }}>
          {startAdornment}
        </InputAdornment>
      )}
      <input
        className={tw(defaultClasses?.input, classes?.input)}
        {...inputProps}
      />
      {endAdornment && (
        <InputAdornment classes={{ ...classes?.endAdornment }}>
          {endAdornment}
        </InputAdornment>
      )}
    </div>
  );
};
