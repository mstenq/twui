import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useMemo,
} from "react";
import { useTheme } from "../../theme";
import { SXClass, Size } from "../../types";
import { tw } from "../../utils";
import { AccordionVariants } from "./Accordion.variants";
import {
  AccordionSingleProps,
  AccordionMultipleProps,
  Root,
} from "@radix-ui/react-accordion";
import { AccordionSummary, AccordionSummarySX } from "./AccordionSummary";
import { AccordionContent } from "./AccordionContent";
import { AccordionItem } from "./AccordionItem";
import { AccordionProvider } from "./AccordionProvider";

export type AccordionSX = {
  root?: SXClass;
  item?: SXClass;
  summary?: AccordionSummarySX;
  content?: SXClass;
};

export interface AccordionVariants {
  default: true;
  contained: true;
  filled: true;
  separated: true;
}

interface BaseProps {
  variant?: keyof AccordionVariants;
  baseVariant?: "default" | "contained" | "filled" | "separated";
  classes?: AccordionSX;
  children: ReactNode;
  collapsible?: boolean;
  disabled?: boolean;
  color?: string;
}

type RadixAccordionProps = AccordionSingleProps | AccordionMultipleProps;
export type AccordionProps = (AccordionSingleProps | AccordionMultipleProps) &
  BaseProps;

const test: AccordionProps = {
  type: "multiple",
  value: ["test"],
  children: <div />,
};

export type AccordionTheme = Partial<
  Record<keyof AccordionVariants, Omit<BaseProps, "variant" | "children">>
>;

const AccordionRoot = ({ variant = "default", ...props }: AccordionProps) => {
  const theme = useTheme();

  const {
    classes,
    baseVariant = "default",
    children,
    color,
    ...restProps
  } = {
    ...AccordionVariants?.[variant],
    ...theme?.Accordion?.[variant],
    ...props,
  };

  const baseClasses = useMemo(
    () =>
      AccordionVariants?.[variant]?.classes ??
      AccordionVariants?.[baseVariant]?.classes,
    [variant, baseVariant]
  );

  const accordionClasses = useMemo(
    () => ({
      root: tw(baseClasses?.root, classes?.root, color),
      item: tw(baseClasses?.item, classes?.item, color),
      summary: {
        root: tw(baseClasses?.summary?.root, classes?.summary?.root, color),
        text: tw(baseClasses?.summary?.text, classes?.summary?.text, color),
        icon: tw(baseClasses?.summary?.icon, classes?.summary?.icon, color),
      },
      content: tw(baseClasses?.content, classes?.content, color),
    }),
    [baseClasses, classes, color]
  );

  const AccordionItems = useMemo(() => {
    const childrenArray = Children.toArray(children);
    return childrenArray.map((child, index) =>
      cloneElement(child as ReactElement, { index: index.toString() })
    );
  }, [children]);

  const accordionRootProps = restProps as RadixAccordionProps;
  return (
    <AccordionProvider value={accordionClasses}>
      <Root {...accordionRootProps}>
        <div
          data-is-disabled={Boolean(accordionRootProps?.disabled)}
          className={accordionClasses?.root}
        >
          {AccordionItems}
        </div>
      </Root>
    </AccordionProvider>
  );
};

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Summary: AccordionSummary,
  Content: AccordionContent,
});
