import {
  LabelProps,
  LabelVariants,
  InputControlTheme,
  IconButtonTheme,
  FieldErrorProps,
  FieldErrorVariants,
  ButtonGroupTheme,
  ButtonTheme,
  AdornmentTheme,
  AccordionTheme,
  InputTheme,
} from "@/components";

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
  ButtonGroup?: ButtonGroupTheme;
};
