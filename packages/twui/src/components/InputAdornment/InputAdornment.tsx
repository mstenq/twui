import { ReactNode } from "react";
import { tw } from "../../utils";

export type InputAdornmentSX = {
  root?: string;
};

export type InputAdornmentProps = {
  children?: ReactNode;
  classes?: InputAdornmentSX;
};

export const InputAdornment: React.FC<InputAdornmentProps> = ({
  children,
  classes,
}) => {
  return <div className={tw("px-2", classes?.root)}>{children}</div>;
};
