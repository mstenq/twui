import React, { HTMLProps, ReactNode, useMemo } from "react";
import { useTheme } from "../../theme";
import { Size, SXClass } from "../../types";
import { getDataAttributes, tw } from "../../utils";

export type FieldErrorSX = {
  root?: SXClass;
};

export interface FieldErrorVariants {
  default: true;
}

export type FieldErrorProps = Omit<HTMLProps<HTMLDivElement>, "size"> & {
  variant?: keyof FieldErrorVariants;
  children?: ReactNode;
  classes?: FieldErrorSX;
  size?: Size;
};

export const FieldError: React.FC<FieldErrorProps> = ({
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
    ...theme?.FieldError?.[variant],
    ...props,
  };

  const dataAttributes = useMemo(
    () => ({
      "data-size": size,
      ...getDataAttributes(rest),
    }),
    [size, rest]
  );

  return (
    <div
      {...dataAttributes}
      {...rest}
      className={tw(
        "is-xs:text-xs is-sm:text-sm is-lg:text-base is-xl:text-lg text-error-600",
        classes?.root
      )}
    >
      {children}
    </div>
  );
};
