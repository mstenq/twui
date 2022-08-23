import { InputTheme } from "../components";
import { AdornmentTheme } from "../components/Adornment";
import { ButtonTheme } from "../components/Button";
import { FieldErrorProps, FieldErrorVariants } from "../components/FieldError";
import { IconButtonTheme } from "../components/IconButton";
import { InputControlTheme } from "../components/InputControl";
import { LabelProps, LabelVariants } from "../components/Label";

export type Theme = {
  Button?: ButtonTheme;
  IconButton?: IconButtonTheme;
  Input?: InputTheme;
  Adornment?: AdornmentTheme;
  InputControl?: InputControlTheme;
  Label?: Record<keyof LabelVariants, Omit<LabelProps, "variant">>;
  FieldError?: Record<
    keyof FieldErrorVariants,
    Omit<FieldErrorProps, "variant">
  >;
};
