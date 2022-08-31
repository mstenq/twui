import { HTMLProps, ReactNode, useMemo } from "react";
import { useTheme } from "@/theme";
import { SXClass, Size } from "@/types";
import { tw } from "@/utils";
import {
  FieldError,
  FieldErrorSX,
  FieldErrorVariants,
  Input,
  InputSX,
  InputVariants,
  Label,
  LabelSX,
  LabelVariants,
} from "@/components";
import { InputControlVariants } from "./InputControl.variants";

export type InputControlSX = {
  root?: SXClass;
  label?: LabelSX;
  description?: SXClass;
  input?: InputSX;
  fieldError?: FieldErrorSX;
};

export interface InputControlVariants {
  default: true;
  descriptionBelow: true;
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
  const {
    children,
    classes,
    label,
    labelVariant = "default",
    inputVariant = "default",
    baseVariant = "default",
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

  const baseClasses = InputControlVariants?.[baseVariant]?.classes;

  const dataAttributes = useMemo(
    () => ({
      "data-size": size,
      "data-has-error": Boolean(error),
      "data-is-disabled": Boolean(inputProps?.disabled),
      "data-is-readonly": Boolean(inputProps?.readOnly),
    }),
    [error, inputProps?.disabled, inputProps?.readOnly, size]
  );

  return (
    <div {...dataAttributes} className={tw(baseClasses?.root, classes?.root)}>
      {label && (
        <Label
          {...dataAttributes}
          variant={labelVariant}
          htmlFor={inputProps?.name}
          required={inputProps?.required}
          size={size}
          classes={{ ...baseClasses?.label, ...classes?.label }}
        >
          {label}
        </Label>
      )}
      {description && (
        <div
          {...dataAttributes}
          className={tw(baseClasses?.description, classes?.description, color)}
        >
          {description}
        </div>
      )}
      <Input
        {...inputProps}
        hasError={Boolean(error)}
        size={size}
        variant={inputVariant}
        color={color}
        classes={{ ...baseClasses?.input, ...classes?.input }}
      />
      {error && (
        <FieldError
          {...dataAttributes}
          variant={fieldErrorVariant}
          size={size}
          classes={{ ...baseClasses?.fieldError, ...classes?.fieldError }}
        >
          {error}
        </FieldError>
      )}
    </div>
  );
};
