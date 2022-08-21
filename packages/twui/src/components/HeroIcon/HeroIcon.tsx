import React, {
  cloneElement,
  HTMLProps,
  ReactElement,
  ReactNode,
  useMemo,
} from "react";
import { useTheme } from "../../theme";
import { Size, SXClass } from "../../types";
import { getDataAttributes, tw } from "../../utils";

export type HeroIconSX = {
  root?: SXClass;
};

export interface HeroIconVariants {
  default: true;
}

export type HeroIconProps = Omit<HTMLProps<HTMLDivElement>, "size"> & {
  variant?: keyof HeroIconVariants;
  children?: ReactNode;
  classes?: HeroIconSX;
  size?: Size;
};

export type HeroIconTheme = Partial<
  Record<keyof HeroIconVariants, Omit<HeroIconProps, "variant">>
>;

export const HeroIcon: React.FC<HeroIconProps> = ({
  variant = "default",
  ...props
}) => {
  const theme = useTheme();
  const {
    children,
    classes,
    size = "md",
    ...rest
  } = {
    ...theme?.HeroIcon?.[variant],
    ...props,
  };

  const dataAttributes = useMemo(
    () => ({
      "data-size": size,
      ...getDataAttributes(rest),
    }),
    [size, rest]
  );

  if (!children) return null;

  return cloneElement(children as ReactElement, {
    ...dataAttributes,
    ...rest,
    className: tw(
      "w-6 h-6 is-xl:w-8 is-xl:h-8 is-lg:w-7 is-lg:h-7 is-sm:w-5 is-sm:h-5 is-xs:w-4 is-xs:h-4",
      classes?.root
    ),
  });
};
