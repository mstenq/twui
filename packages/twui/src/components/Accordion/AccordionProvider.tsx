import React, { createContext, useContext } from "react";
import { AccordionSX } from "./Accordion";
import { AccordionSummarySX } from "./AccordionSummary";

type AccordionState = Partial<
  Omit<Record<keyof AccordionSX, string>, "summary">
> & { summary?: Partial<Record<keyof AccordionSummarySX, string>> };

const defaultState: AccordionState = {};

const AccordionContext = createContext<AccordionState>(defaultState);

export const AccordionProvider = ({
  value = defaultState,
  children,
}: {
  value?: AccordionState;
  children: React.ReactNode;
}) => {
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordionContext = () => useContext(AccordionContext);
