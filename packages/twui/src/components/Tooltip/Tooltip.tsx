import { cloneElement, useMemo, useState } from "react";
import {
  Placement,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  useRole,
  useDismiss,
  useDelayGroupContext,
  useDelayGroup,
} from "@floating-ui/react-dom-interactions";
import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { mergeRefs } from "react-merge-refs";

const loadFeatures = () =>
  import("@/utils/motionFeatures.js" as any).then((res) => res.default);

export interface TooltipProps {
  label: string;
  placement?: Placement;
  children: JSX.Element;
}

export const Tooltip = ({
  children,
  label,
  placement = "top",
}: TooltipProps) => {
  const { delay, setCurrentId } = useDelayGroupContext();
  const [open, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context } = useFloating({
    placement,
    open,
    onOpenChange(open) {
      setOpen(open);
      if (open) {
        setCurrentId(label);
      }
    },
    middleware: [offset(5), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { restMs: 60 }),
    useFocus(context),
    useRole(context, { role: "tooltip" }),
    useDismiss(context),
    useDelayGroup(context, { id: label }),
  ]);

  // Preserve the consumer's ref
  const ref = useMemo(
    () => mergeRefs([reference, (children as any).ref]),
    [reference, children]
  );

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref, ...children.props }))}
      <LazyMotion features={loadFeatures}>
        <AnimatePresence>
          {open && (
            <m.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={
                // When in "grouped phase", make the transition faster
                typeof delay === "object" && delay.open === 1
                  ? { duration: 0.2, type: "spring" }
                  : { type: "spring", damping: 20, stiffness: 300 }
              }
              {...getFloatingProps({
                ref: floating,
                className: "Tooltip",
                style: {
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                },
              })}
            >
              {label}
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  );
};
