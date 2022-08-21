import {
  cloneElement,
  HTMLProps,
  ReactElement,
  ReactNode,
  useMemo,
} from "react";
import { SXClass, Size } from "../../types";
import { tw } from "../../utils";

export type InputAdornmentSX = {
  root?: SXClass;
};

export type InputAdornmentProps = Omit<HTMLProps<HTMLDivElement>, "size"> & {
  children?: ReactNode;
  classes?: InputAdornmentSX;
  size?: Size;
};

const renderChildren = (
  children: ReactNode | undefined,
  dataAttributes: Record<string, string>
) => {
  console.log(children);
  if (!children) return null;
  if (typeof children === "string" || typeof children === "number")
    return children;
  return cloneElement(children as ReactElement, dataAttributes);
};

export const InputAdornment: React.FC<InputAdornmentProps> = ({
  children,
  classes,
  size = "md",
  ...rest
}) => {
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
      className={tw(
        "TWUI-InputAdornment-root px-2 flex items-center text-gray-600 has-error:text-error-600 is-xs:px-1 is-xs:text-xs is-sm:text-sm is-lg:text-xl is-xl:text-2xl",
        classes?.root
      )}
    >
      {renderChildren(children, dataAttributes)}
    </div>
  );
};
