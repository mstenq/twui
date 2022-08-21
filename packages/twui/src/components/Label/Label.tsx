import { HTMLProps, ReactNode } from "react";
import { useTheme } from "../../theme";
import { TUIClass } from "../../types";
import { getDataAttributes, tw } from "../../utils";

export type LabelSX = {
  root?: TUIClass;
  label?: TUIClass;
  required?: TUIClass;
  description?: TUIClass;
};

export interface LabelVariants {
  default: true;
}

export type LabelProps = HTMLProps<HTMLLabelElement> & {
  variant?: keyof LabelVariants;
  children?: ReactNode;
  description?: ReactNode;
  classes?: LabelSX;
  required?: boolean;
};

export const Label: React.FC<LabelProps> = ({
  variant = "default",
  ...props
}) => {
  const theme = useTheme();
  const {
    children,
    classes,
    description,
    required = false,
    ...rest
  } = {
    ...theme?.components?.Label?.[variant],
    ...props,
  };

  return (
    <div
      {...getDataAttributes(rest)}
      className={tw("is-disabled:opacity-50", classes?.root)}
    >
      <label {...rest} className={tw("", classes?.label)}>
        {children}
        {required && (
          <span className={tw("pl-1 text-error-400", classes?.required)}>
            *
          </span>
        )}
      </label>
      {description && (
        <div className={tw("text-xs text-gray-500", classes?.description)}>
          {description}
        </div>
      )}
    </div>
  );
};
