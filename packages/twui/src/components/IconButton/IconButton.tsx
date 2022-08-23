import { ButtonHTMLAttributes, ReactNode, useMemo } from "react";
import { useTheme } from "../../theme";
import { SXClass, Size } from "../../types";
import { tw } from "../../utils";
import { IconButtonVariants } from "./IconButton.variants";

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

export const IconButton: React.FC<IconButtonProps> = ({
  variant = "default",
  ...props
}) => {
  const theme = useTheme();

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
    ...props,
  };

  const baseClasses =
    IconButtonVariants?.[variant]?.classes ??
    IconButtonVariants?.[baseVariant]?.classes;

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
      {...dataAttributes}
      {...IconButtonProps}
      className={tw(baseClasses?.root, classes?.root, color)}
    >
      {children}
    </button>
  );
};
