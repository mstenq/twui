import React, { HTMLProps, ReactNode } from "react";
import { useTheme } from "../../theme";
import { TUIClass } from "../../types";
import { tw } from "../../utils";

export type FieldErrorSX = {
  root?: TUIClass;
};

export interface FieldErrorVariants {
  default: true;
}

export type FieldErrorProps = HTMLProps<HTMLDivElement> & {
  variant?: keyof FieldErrorVariants;
  children?: ReactNode;
  classes?: FieldErrorSX;
};

export const FieldError: React.FC<FieldErrorProps> = ({
  variant = "default",
  ...props
}) => {
  const theme = useTheme();
  const { children, classes, ...rest } = {
    ...theme?.components?.FieldError?.[variant],
    ...props,
  };
  return (
    <div {...rest} className={tw("text-xs text-error-500", classes?.root)}>
      {children}
    </div>
  );
};
