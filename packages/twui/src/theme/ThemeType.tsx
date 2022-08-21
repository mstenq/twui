import { InputAdornmentSX, InputProps, InputVariants } from "../components";
import { FieldErrorProps, FieldErrorVariants } from "../components/FieldError";
import {
  InputControlProps,
  InputControlVariants,
} from "../components/InputControl";
import { LabelProps, LabelVariants } from "../components/Label";

export type Theme = {
  components?: {
    Input?: Record<keyof InputVariants, Omit<InputProps, "variant">>;
    InputAdornment?: {
      default?: InputAdornmentSX;
    };
    InputControl?: Record<
      keyof InputControlVariants,
      Omit<InputControlProps, "variant">
    >;
    Label?: Record<keyof LabelVariants, Omit<LabelProps, "variant">>;
    FieldError?: Record<
      keyof FieldErrorVariants,
      Omit<FieldErrorProps, "variant">
    >;
  };
};
