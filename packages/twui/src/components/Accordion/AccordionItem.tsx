import { ReactNode } from "react";

import { Item } from "@radix-ui/react-accordion";
import { useAccordionContext } from "./AccordionProvider";

type AccordionItemProps = {
  children: ReactNode;
  value?: string;
  index?: string;
};

export const AccordionItem = ({
  children,
  value,
  index,
}: AccordionItemProps) => {
  const { item } = useAccordionContext();
  return (
    <Item className={item} value={value ?? index ?? "0"}>
      {children}
    </Item>
  );
};
