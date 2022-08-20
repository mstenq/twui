import { HTMLProps, ReactNode } from "react";
import { tw } from "../../utils";

export type InputAdornmentSX = {
  root?: string;
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
    <div {...rest} className={tw("px-2", classes?.root)}>
      {children}
    </div>
  );
};
