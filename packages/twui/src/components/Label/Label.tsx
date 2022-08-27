import { forwardRef, HTMLProps, ReactNode, Ref, useMemo } from "react";
import { useTheme } from "@/theme";
import { Color, Size, SXClass } from "@/types";
import { getDataAttributes, tw } from "@/utils";
import { LabelVariants } from "./Label.variant";

export type LabelSX = {
  root?: SXClass;
  required?: SXClass;
};

export interface LabelVariants {
  default: true;
}

export type LabelProps = Omit<HTMLProps<HTMLLabelElement>, "size"> & {
  variant?: keyof LabelVariants;
  baseVariant?: "default";
  children?: ReactNode;
  classes?: LabelSX;
  size?: Size;
  color?: Color;
};

export type LabelTheme = Partial<
  Record<keyof LabelVariants, Omit<LabelProps, "variant" | "children">>
>;

const _Label = (
  { variant = "default", ...props }: LabelProps,
  ref?: Ref<HTMLLabelElement>
) => {
  const theme = useTheme();
  const {
    children,
    classes,
    size = "md",
    color = "primary",
    baseVariant = "default",
    required = false,
    ...labelProps
  } = {
    ...LabelVariants?.[variant],
    ...theme?.Label?.[variant],
    ...props,
  };
  const baseClasses =
    LabelVariants?.[variant]?.classes ?? LabelVariants?.[baseVariant]?.classes;

  const dataAttributes = useMemo(
    () => ({
      "data-size": size,
      ...getDataAttributes(labelProps),
    }),
    [size, labelProps]
  );

  return (
    <label
      ref={ref}
      {...labelProps}
      className={tw(baseClasses?.root, classes?.root, color)}
    >
      {children}
      {required && (
        <span
          {...dataAttributes}
          className={tw(baseClasses?.required, classes?.root, color)}
        >
          *
        </span>
      )}
    </label>
  );
};

export const Label = forwardRef(_Label);
