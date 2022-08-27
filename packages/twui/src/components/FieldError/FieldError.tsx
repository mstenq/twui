import { forwardRef, HTMLProps, ReactNode, Ref, useMemo } from "react";
import { useTheme } from "@/hooks";
import { Color, Size, SXClass } from "@/types";
import { getDataAttributes, tw } from "@/utils";
import { FieldErrorVariants } from "./FieldError.variant";

export type FieldErrorSX = {
  root?: SXClass;
};

export interface FieldErrorVariants {
  default: true;
}

export type FieldErrorProps = Omit<HTMLProps<HTMLDivElement>, "size"> & {
  variant?: keyof FieldErrorVariants;
  baseVariant?: "default";
  children?: ReactNode;
  classes?: FieldErrorSX;
  size?: Size;
  color?: Color;
};

export type FieldErrorTheme = Partial<
  Record<
    keyof FieldErrorVariants,
    Omit<FieldErrorProps, "variant" | "children">
  >
>;

const _FieldError = (
  { variant = "default", ...props }: FieldErrorProps,
  ref?: Ref<HTMLDivElement>
) => {
  const theme = useTheme();
  const {
    children,
    classes,
    size = "md",
    color = "primary",
    baseVariant = "default",
    ...rootProps
  } = {
    ...FieldErrorVariants?.[variant],
    ...theme?.FieldError?.[variant],
    ...props,
  };
  const baseClasses =
    FieldErrorVariants?.[variant]?.classes ??
    FieldErrorVariants?.[baseVariant]?.classes;

  const dataAttributes = useMemo(
    () => ({
      "data-size": size,
      ...getDataAttributes(rootProps),
    }),
    [size, rootProps]
  );

  return (
    <div
      ref={ref}
      {...dataAttributes}
      {...rootProps}
      className={tw(baseClasses?.root, classes?.root, color)}
    >
      {children}
    </div>
  );
};

export const FieldError = forwardRef(_FieldError);
