import { HTMLProps, ReactNode, useMemo, useState } from "react";
import { useTheme } from "../../theme";
import { SXClass, Size } from "../../types";
import { tw } from "../../utils";
import { Adornment, AdornmentSX } from "../Adornment";
import { InputVariants } from "./Input.variants";

export type InputSX = {
  root?: SXClass;
  input?: SXClass;
  startAdornment?: AdornmentSX;
  endAdornment?: AdornmentSX;
};

export interface InputVariants {
  default: true;
  filled: true;
}

export type InputProps = Omit<HTMLProps<HTMLInputElement>, "size"> & {
  variant?: keyof InputVariants;
  baseVariant?: "default" | "filled"; //Hardcoded as InputVariants are extendable
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  classes?: InputSX;
  hasError?: boolean;
  size?: Size;
  color?: string;
};

export type InputTheme = Partial<
  Record<keyof InputVariants, Omit<InputProps, "variant">>
>;

export const Input: React.FC<InputProps> = ({
  variant = "default",
  ...props
}) => {
  const [value, setValue] = useState("");
  const theme = useTheme();

  const {
    startAdornment,
    endAdornment,
    classes,
    hasError,
    size = "md",
    baseVariant = "default",
    color = "primary",
    ...inputProps
  } = {
    ...InputVariants?.[variant],
    ...theme?.Input?.[variant],
    ...props,
  };

  const baseClasses =
    InputVariants?.[variant]?.classes ?? InputVariants?.[baseVariant]?.classes;

  const dataAttributes = useMemo(
    () => ({
      "data-has-error": Boolean(hasError),
      "data-has-text": Boolean(value),
      "data-is-disabled": Boolean(inputProps?.disabled),
      "data-is-readonly": Boolean(inputProps?.readOnly),
      "data-has-startadornment": Boolean(startAdornment),
      "data-has-endadornment": Boolean(endAdornment),
      "data-size": size,
    }),
    [
      hasError,
      value,
      inputProps?.disabled,
      inputProps?.readOnly,
      size,
      startAdornment,
      endAdornment,
    ]
  );

  return (
    <div
      {...dataAttributes}
      className={tw(baseClasses?.root, classes?.root, color)}
    >
      {startAdornment && (
        <Adornment
          {...dataAttributes}
          classes={{ ...classes?.startAdornment }}
          size={size}
        >
          {startAdornment}
        </Adornment>
      )}
      <input
        {...dataAttributes}
        value={value}
        onChange={(e) => setValue(e.target?.value)}
        className={tw(baseClasses?.input, classes?.input, color)}
        {...inputProps}
      />
      {endAdornment && (
        <Adornment
          {...dataAttributes}
          classes={{ ...classes?.endAdornment }}
          size={size}
        >
          {endAdornment}
        </Adornment>
      )}
    </div>
  );
};
