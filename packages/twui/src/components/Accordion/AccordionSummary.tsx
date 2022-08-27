import { ReactNode } from "react";
import { Header, Trigger } from "@radix-ui/react-accordion";
import { useAccordionContext } from "./AccordionProvider";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { SXClass } from "@/types";

export type AccordionSummarySX = {
  root?: SXClass;
  text?: SXClass;
  icon?: SXClass;
};

type AccordionSummaryProps = {
  children: ReactNode;
};

export const AccordionSummary = ({ children }: AccordionSummaryProps) => {
  const summaryClasses = useAccordionContext()?.summary;
  return (
    <Header>
      <Trigger className={summaryClasses?.root}>
        <span className={summaryClasses?.text}>{children}</span>

        <ChevronDownIcon className={summaryClasses?.icon} />
      </Trigger>
    </Header>
  );
};
