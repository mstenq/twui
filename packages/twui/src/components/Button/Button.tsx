import {
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
  Ref,
  useMemo,
} from "react";
import { useTheme } from "@/theme";
import { SXClass, Size, Color } from "@/types";
import { tw } from "@/utils";
import { Adornment, AdornmentSX, useButtonGroup } from "@/components";
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
  color?: Color;
};

export type ButtonTheme = Partial<
  Record<keyof ButtonVariants, Omit<ButtonProps, "variant" | "children">>
>;

const _Button = (
  { variant = "default", ...props }: ButtonProps,
  ref?: Ref<HTMLButtonElement>
) => {
  const theme = useTheme();
  const { buttonGroupButtonTheme } = useButtonGroup();
  const themeVariant = buttonGroupButtonTheme?.variant ?? variant;

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
    ...ButtonVariants?.[themeVariant],
    ...theme?.Button?.[themeVariant],
    ...buttonGroupButtonTheme,
    ...props,
  };

  const baseClasses =
    ButtonVariants?.[themeVariant]?.classes ??
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
      ref={ref}
      {...dataAttributes}
      {...buttonProps}
      className={tw(baseClasses?.root, classes?.root, color)}
    >
      {startAdornment && (
        <Adornment
          {...dataAttributes}
          classes={{ ...classes?.startAdornment }}
          size={buttonGroupButtonTheme?.size ?? size}
          color={buttonGroupButtonTheme?.color ?? color}
        >
          {startAdornment}
        </Adornment>
      )}
      {children}
      {endAdornment && (
        <Adornment
          {...dataAttributes}
          classes={{ ...classes?.endAdornment }}
          size={buttonGroupButtonTheme?.size ?? size}
          color={buttonGroupButtonTheme?.color ?? color}
        >
          {endAdornment}
        </Adornment>
      )}
    </button>
  );
};

export const Button = forwardRef(_Button);
