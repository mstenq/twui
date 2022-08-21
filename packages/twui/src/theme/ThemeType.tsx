import { InputAdornmentSX, InputTheme } from "../components";
import { ButtonTheme } from "../components/Button";
import { FieldErrorProps, FieldErrorVariants } from "../components/FieldError";
import { HeroIconTheme } from "../components/HeroIcon";
import { InputControlTheme } from "../components/InputControl";
import { LabelProps, LabelVariants } from "../components/Label";

export type Theme = {
  Button?: ButtonTheme;
  HeroIcon?: HeroIconTheme;
  Input?: InputTheme;
  InputAdornment?: {
    default?: InputAdornmentSX;
  };
  InputControl?: InputControlTheme;
  Label?: Record<keyof LabelVariants, Omit<LabelProps, "variant">>;
  FieldError?: Record<
    keyof FieldErrorVariants,
    Omit<FieldErrorProps, "variant">
  >;
};
