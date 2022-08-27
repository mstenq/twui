import {
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
  Ref,
  useMemo,
} from "react";
import { useTheme } from "@/theme";
import { SXClass, Size } from "@/types";
import { tw } from "@/utils";
import { IconButtonVariants } from "./IconButton.variants";
import { useButtonGroup } from "../ButtonGroup";

export type IconButtonSX = {
  root?: SXClass;
};

export interface IconButtonVariants {
  default: true;
  light: true;
  outline: true;
  subtle: true;
}

export type IconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "size"
> & {
  variant?: keyof IconButtonVariants;
  baseVariant?: "default" | "light" | "outline" | "subtle";
  endAdornment?: ReactNode;
  classes?: IconButtonSX;
  hasError?: boolean;
  size?: Size;
  children: ReactNode;
  color?: string;
};

export type IconButtonTheme = Partial<
  Record<
    keyof IconButtonVariants,
    Omit<IconButtonProps, "variant" | "children">
  >
>;

const _IconButton = (
  { variant = "default", ...props }: IconButtonProps,
  ref?: Ref<HTMLButtonElement>
) => {
  const theme = useTheme();
  const { buttonGroupIconButtonTheme } = useButtonGroup();
  const themeVariant = buttonGroupIconButtonTheme?.variant ?? variant;

  const {
    classes,
    hasError,
    size = "md",
    baseVariant = "default",
    children,
    color,
    ...IconButtonProps
  } = {
    ...IconButtonVariants?.[variant],
    ...theme?.IconButton?.[variant],
    ...buttonGroupIconButtonTheme,
    ...props,
  };

  const baseClasses =
    IconButtonVariants?.[themeVariant]?.classes ??
    IconButtonVariants?.[themeVariant]?.classes;

  const dataAttributes = useMemo(
    () => ({
      "data-has-error": Boolean(hasError),
      "data-is-disabled": Boolean(IconButtonProps?.disabled),
      "data-size": size,
    }),
    [hasError, IconButtonProps?.disabled, size]
  );

  return (
    <button
      ref={ref}
      {...dataAttributes}
      {...IconButtonProps}
      className={tw(baseClasses?.root, classes?.root, color)}
    >
      {children}
    </button>
  );
};

export const IconButton = forwardRef(_IconButton);
