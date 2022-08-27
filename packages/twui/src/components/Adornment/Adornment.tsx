import {
  cloneElement,
  HTMLProps,
  ReactElement,
  ReactNode,
  useMemo,
} from "react";
import { useTheme } from "@/theme";
import { SXClass, Size } from "@/types";
import { tw } from "@/utils";
import { AdornmentVariants } from "./Adornment.variants";

export type AdornmentSX = {
  root?: SXClass;
  icon?: SXClass;
};

export interface AdornmentVariants {
  default: true;
}

export type AdornmentProps = Omit<HTMLProps<HTMLDivElement>, "size"> & {
  variant?: keyof AdornmentVariants;
  baseVariant?: "default";
  children?: ReactNode;
  classes?: AdornmentSX;
  size?: Size;
  color?: string;
};

export type AdornmentTheme = Partial<
  Record<keyof AdornmentVariants, Omit<AdornmentProps, "variant">>
>;

const renderChildren = (
  children: ReactNode | undefined,
  dataAttributes: Record<string, string>,
  className?: string
) => {
  console.log(children);
  if (typeof children === "string" || typeof children === "number")
    return children;
  return cloneElement(children as ReactElement, {
    ...dataAttributes,
    className,
  });
};

export const Adornment: React.FC<AdornmentProps> = ({
  variant = "default",
  ...props
}) => {
  const theme = useTheme();
  const {
    baseVariant = "default",
    children,
    classes,
    size = "md",
    color,
    ...rest
  } = {
    ...AdornmentVariants?.[variant],
    ...theme?.Adornment?.[variant],
    ...props,
  };

  const baseClasses =
    AdornmentVariants?.[variant]?.classes ??
    AdornmentVariants?.[baseVariant]?.classes;

  console.log(baseClasses);
  const dataAttributes = useMemo(
    () => ({
      "data-size": size,
    }),
    [size]
  );

  return (
    <div
      {...dataAttributes}
      {...rest}
      className={tw(baseClasses?.root, classes?.root, color)}
    >
      {renderChildren(
        children,
        dataAttributes,
        tw(baseClasses?.icon, classes?.icon, color)
      )}
    </div>
  );
};
