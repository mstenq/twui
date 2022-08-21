import { HTMLProps, ReactNode, useMemo, useState } from "react";
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
  hasError?: boolean;
};

export const Input: React.FC<InputProps> = ({
  variant = "default",
  ...props
}) => {
  //Merge themeProps with instance props
  const theme = useTheme();
  const { startAdornment, endAdornment, classes, hasError, ...inputProps } = {
    ...theme?.components?.Input?.[variant],
    ...props,
  };

  const [value, setValue] = useState("");

  const dataAttributes = useMemo(
    () => ({
      "data-has-error": Boolean(hasError),
      "data-has-text": Boolean(value),
      "data-is-disabled": Boolean(inputProps?.disabled),
      "data-is-readonly": Boolean(inputProps?.readOnly),
    }),
    [hasError, value, inputProps?.disabled, inputProps?.readOnly]
  );

  return (
    <div
      {...dataAttributes}
      className={tw(
        "border border-gray-300 flex items-stretch focus-within:border-primary-600 is-disabled:opacity-50 is-disabled:cursor-not-allowed has-error:border-error-400",
        classes?.root
      )}
    >
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
        className={tw(
          "p-2 w-full bg-transparent block border-none focus:outline-none is-disabled:cursor-not-allowed",
          classes?.input
        )}
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
