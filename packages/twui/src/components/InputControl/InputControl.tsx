import { HTMLProps, ReactNode, useMemo } from "react";
import { useTheme } from "../../theme";
import { SXClass, Size } from "../../types";
import { tw } from "../../utils";
import { FieldError, FieldErrorVariants } from "../FieldError";
import { Input, InputVariants } from "../Input/Input";
import { Label, LabelVariants } from "../Label";
import { InputControlVariants } from "./InputControl.variants";

export type InputControlSX = {
  root?: SXClass;
};

export interface InputControlVariants {
  default: true;
  filled: true;
}

export type InputControlProps = Omit<HTMLProps<HTMLInputElement>, "size"> & {
  variant?: keyof InputControlVariants;
  label?: ReactNode;
  labelVariant?: keyof LabelVariants;
  inputVariant?: keyof InputVariants;
  description?: ReactNode;
  classes?: InputControlSX;
  fieldErrorVariant?: keyof FieldErrorVariants;
  error?: ReactNode;
  size?: Size;
  color?: string;
};
export type InputControlTheme = Partial<
  Record<keyof InputControlVariants, Omit<InputControlProps, "variant">>
>;

export const InputControl: React.FC<InputControlProps> = ({
  variant = "default",
  ...props
}) => {
  const theme = useTheme();
  const baseClasses = InputControlVariants?.[variant]?.classes;
  const {
    children,
    classes,
    label,
    labelVariant = "default",
    inputVariant = "default",
    description,
    error,
    fieldErrorVariant,
    size = "md",
    color = "primary",
    ...inputProps
  } = {
    ...InputControlVariants?.[variant],
    ...theme?.InputControl?.[variant],
    ...props,
  };

  const dataAttributes = useMemo(
    () => ({
      "data-has-error": Boolean(error),
      "data-is-disabled": Boolean(inputProps?.disabled),
      "data-is-readonly": Boolean(inputProps?.readOnly),
    }),
    [error, inputProps?.disabled, inputProps?.readOnly]
  );

  return (
    <div {...dataAttributes} className={tw("", classes?.root)}>
      {label && (
        <Label
          {...dataAttributes}
          variant={labelVariant}
          description={description}
          htmlFor={inputProps?.name}
          required={inputProps?.required}
          size={size}
        >
          {label}
        </Label>
      )}
      <Input
        {...inputProps}
        hasError={Boolean(error)}
        size={size}
        variant={inputVariant}
        color={color}
      />
      {error && (
        <FieldError {...dataAttributes} variant={fieldErrorVariant} size={size}>
          {error}
        </FieldError>
      )}
    </div>
  );
};
