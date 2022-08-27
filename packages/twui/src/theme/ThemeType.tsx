import {
  InputControlTheme,
  IconButtonTheme,
  ButtonGroupTheme,
  ButtonTheme,
  AdornmentTheme,
  AccordionTheme,
  InputTheme,
  FieldErrorTheme,
  LabelTheme,
  TooltipTheme,
} from "@/components";


export type Theme = {
  Tooltip?: TooltipTheme;
  Label?: LabelTheme;
  FieldError?: FieldErrorTheme;
  Accordion?: AccordionTheme;
  Adornment?: AdornmentTheme;
  Button?: ButtonTheme;
  IconButton?: IconButtonTheme;
  Input?: InputTheme;
  InputControl?: InputControlTheme;
  ButtonGroup?: ButtonGroupTheme;
};
