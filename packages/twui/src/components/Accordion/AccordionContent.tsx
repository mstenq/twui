import { ReactNode } from "react";

import { Content } from "@radix-ui/react-accordion";
import { useAccordionContext } from "./AccordionProvider";

type AccordionContentProps = {
  children: ReactNode;
};
export const AccordionContent = ({ children }: AccordionContentProps) => {
  const className = useAccordionContext()?.content;
  return <Content className={className}>{children}</Content>;
};
