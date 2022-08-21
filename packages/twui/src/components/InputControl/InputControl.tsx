import { HTMLProps, ReactNode, useMemo } from "react";
import { useTheme } from "../../theme";
import { TUIClass } from "../../types";
import { tw } from "../../utils";
import { FieldError, FieldErrorVariants } from "../FieldError";
import { Input } from "../Input/Input";
import { Label, LabelVariants } from "../Label";

export type InputControlSX = {
  root?: TUIClass;
};

export interface InputControlVariants {
  default: true;
}

export type InputControlProps = HTMLProps<HTMLInputElement> & {
  variant?: keyof InputControlVariants;
  label?: ReactNode;
  labelVariant?: keyof LabelVariants;
  description?: ReactNode;
  classes?: InputControlSX;
  fieldErrorVariant?: keyof FieldErrorVariants;
  error?: ReactNode;
};

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
    description,
    error,
    fieldErrorVariant,
    ...inputProps
  } = {
    ...theme?.components?.InputControl?.[variant],
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
        >
          {label}
        </Label>
      )}
      <Input {...inputProps} hasError={Boolean(error)} />
      {error && (
        <FieldError {...dataAttributes} variant={fieldErrorVariant}>
          {error}
        </FieldError>
      )}
    </div>
  );
};
