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
  TabsTheme,
} from "@/components";



export type Theme = {
  Tabs?: TabsTheme;
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
