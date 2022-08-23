import { ButtonHTMLAttributes, ReactNode, useMemo } from "react";
import { useTheme } from "../../theme";
import { SXClass, Size } from "../../types";
import { tw } from "../../utils";
import { Adornment, AdornmentSX } from "../Adornment";
import { ButtonVariants } from "./Button.variants";

export type ButtonSX = {
  root?: SXClass;
  startAdornment?: AdornmentSX;
  endAdornment?: AdornmentSX;
};

export interface ButtonVariants {
  default: true;
  light: true;
  outline: true;
  subtle: true;
}

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "size"
> & {
  variant?: keyof ButtonVariants;
  baseVariant?: "default" | "light" | "outline" | "subtle";
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  classes?: ButtonSX;
  hasError?: boolean;
  size?: Size;
  children: ReactNode;
  color?: string;
};

export type ButtonTheme = Partial<
  Record<keyof ButtonVariants, Omit<ButtonProps, "variant" | "children">>
>;

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  ...props
}) => {
  const theme = useTheme();

  const {
    startAdornment,
    endAdornment,
    classes,
    hasError,
    size = "md",
    baseVariant = "default",
    children,
    color,
    ...buttonProps
  } = {
    ...ButtonVariants?.[variant],
    ...theme?.Button?.[variant],
    ...props,
  };

  const baseClasses =
    ButtonVariants?.[variant]?.classes ??
    ButtonVariants?.[baseVariant]?.classes;

  const dataAttributes = useMemo(
    () => ({
      "data-has-error": Boolean(hasError),
      "data-is-disabled": Boolean(buttonProps?.disabled),
      "data-has-startadornment": Boolean(startAdornment),
      "data-has-endadornment": Boolean(endAdornment),
      "data-size": size,
    }),
    [hasError, buttonProps?.disabled, size, startAdornment, endAdornment]
  );

  return (
    <button
      {...dataAttributes}
      {...buttonProps}
      className={tw(baseClasses?.root, classes?.root, color)}
    >
      {startAdornment && (
        <Adornment
          {...dataAttributes}
          classes={{ ...classes?.startAdornment }}
          size={size}
          color={color}
        >
          {startAdornment}
        </Adornment>
      )}
      {children}
      {endAdornment && (
        <Adornment
          {...dataAttributes}
          classes={{ ...classes?.endAdornment }}
          size={size}
          color={color}
        >
          {endAdornment}
        </Adornment>
      )}
    </button>
  );
};
