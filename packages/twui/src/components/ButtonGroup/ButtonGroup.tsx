import { forwardRef, HTMLProps, ReactNode, Ref } from "react";
import { useTheme } from "@/theme";
import { Color, Size, SXClass } from "@/types";
import { tw } from "@/utils";
import { FloatingDelayGroup } from "@floating-ui/react-dom-interactions";
import { ButtonSX, ButtonVariants, IconButtonSX } from "@/components";
import { ButtonGroupVariants } from "./ButtonGroup.variants";
import { ButtonGroupProvider } from "./ButtonGroupProvider";

export type ButtonGroupSX = {
  root?: SXClass;
  button?: ButtonSX;
  iconButton?: IconButtonSX;
};

export type ButtonGroupProps = Omit<HTMLProps<HTMLDivElement>, "size"> & {
  variant?: keyof ButtonVariants;
  baseVariant?: "default";
  children?: ReactNode;
  classes?: ButtonGroupSX;
  size?: Size;
  color?: Color;
};

export type ButtonGroupTheme = Partial<
  Record<keyof ButtonVariants, Omit<ButtonGroupProps, "variant" | "children">>
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
    buttonVariant = "default",
    ...rootProps
  } = {
    ...ButtonGroupVariants?.[variant],
    ...theme?.ButtonGroup?.[variant],
    ...props,
  };
  const baseClasses =
    ButtonGroupVariants?.[variant]?.classes ??
    ButtonGroupVariants?.[baseVariant]?.classes;

  const sharedThemeOverrides = { size, color, variant };

  return (
    <ButtonGroupProvider
      value={{
        buttonGroupButtonTheme: {
          ...sharedThemeOverrides,
          classes: baseClasses?.button,
        },
        buttonGroupIconButtonTheme: {
          ...sharedThemeOverrides,
          classes: baseClasses?.iconButton,
        },
      }}
    >
      <FloatingDelayGroup delay={{ open: 1000, close: 200 }}>
        <div
          ref={ref}
          {...rootProps}
          className={tw(baseClasses?.root, classes?.root, color)}
        >
          {children}
        </div>
      </FloatingDelayGroup>
    </ButtonGroupProvider>
  );
};

export const ButtonGroup = forwardRef(_ButtonGroup);
