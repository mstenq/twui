import { forwardRef, HTMLProps, ReactNode, Ref } from "react";
import { useTheme } from "@/hooks";
import { Color, Size, SXClass } from "@/types";
import { tw } from "@/utils";
import { ButtonGroupVariants } from "./ButtonGroup.variant";

export type ButtonGroupSX = {
  root?: SXClass;
};

export interface ButtonGroupVariants {
  default: true;
}

export type ButtonGroupProps = Omit<HTMLProps<HTMLDivElement>, "size"> & {
  variant?: keyof ButtonGroupVariants;
  baseVariant?: "default";
  children?: ReactNode;
  classes?: ButtonGroupSX;
  size?: Size;
  color?: Color;
};

export type ButtonGroupTheme = Partial<
  Record<
    keyof ButtonGroupVariants,
    Omit<ButtonGroupProps, "variant" | "children">
  >
>;

const _ButtonGroup = (
  { variant = "default", ...props }: ButtonGroupProps,
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
    ...ButtonGroupVariants?.[variant],
    ...theme?.ButtonGroup?.[variant],
    ...props,
  };
  const baseClasses =
    ButtonGroupVariants?.[variant]?.classes ??
    ButtonGroupVariants?.[baseVariant]?.classes;

  return (
    <div
      ref={ref}
      {...rootProps}
      className={tw(baseClasses?.root, classes?.root, color)}
    >
      ButtonGroup
    </div>
  );
};

export const ButtonGroup = forwardRef(_ButtonGroup);
