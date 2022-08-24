import { InputTheme } from "../components";
import { AccordionTheme } from "../components/Accordion";
import { AdornmentTheme } from "../components/Adornment";
import { ButtonTheme } from "../components/Button";
import { FieldErrorProps, FieldErrorVariants } from "../components/FieldError";
import { IconButtonTheme } from "../components/IconButton";
import { InputControlTheme } from "../components/InputControl";
import { LabelProps, LabelVariants } from "../components/Label";

export type Theme = {
  Accordion?: AccordionTheme;
  Adornment?: AdornmentTheme;
  Button?: ButtonTheme;
  FieldError?: Record<
    keyof FieldErrorVariants,
    Omit<FieldErrorProps, "variant">
  >;
  IconButton?: IconButtonTheme;
  Input?: InputTheme;
  InputControl?: InputControlTheme;
  Label?: Record<keyof LabelVariants, Omit<LabelProps, "variant">>;
};
