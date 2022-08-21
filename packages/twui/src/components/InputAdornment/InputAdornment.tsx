import { HTMLProps, ReactNode } from "react";
import { TUIClass } from "../../types";
import { tw } from "../../utils";

export type InputAdornmentSX = {
  root?: TUIClass;
};

export type InputAdornmentProps = HTMLProps<HTMLDivElement> & {
  children?: ReactNode;
  classes?: InputAdornmentSX;
};

export const InputAdornment: React.FC<InputAdornmentProps> = ({
  children,
  classes,
  ...rest
}) => {
  return (
    <div {...rest} className={tw("px-2 flex items-center", classes?.root)}>
      {children}
    </div>
  );
};
