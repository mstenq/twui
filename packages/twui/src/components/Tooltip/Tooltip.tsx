import {
  cloneElement,
  forwardRef,
  HTMLProps,
  ReactNode,
  Ref,
  useMemo,
  useRef,
  useState,
} from "react";
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
  arrow,
} from "@floating-ui/react-dom-interactions";
import { useTheme } from "@/theme";
import { Color, Size, SXClass } from "@/types";
import { tw } from "@/utils";
import { TooltipVariants } from "./Tooltip.variant";
import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { mergeRefs } from "react-merge-refs";
import { useArrowPlacement } from "./useArrowPlacement";

const loadFeatures = () =>
  import("@/utils/motionFeatures.js" as any).then((res) => res.default);

export type TooltipSX = {
  root?: SXClass;
  arrow?: SXClass;
};

export interface TooltipVariants {
  default: true;
}

export type TooltipProps = Omit<HTMLProps<HTMLDivElement>, "size"> & {
  variant?: keyof TooltipVariants;
  baseVariant?: "default";
  children: JSX.Element;
  classes?: TooltipSX;
  size?: Size;
  color?: Color;
};

export type TooltipTheme = Partial<
  Record<keyof TooltipVariants, Omit<TooltipProps, "variant" | "children">>
>;

export const Tooltip = ({ variant = "default", ...props }: TooltipProps) => {
  const theme = useTheme();
  const arrowRef = useRef(null);
  const { delay, setCurrentId } = useDelayGroupContext();
  const delayMs = typeof delay === "object" ? delay.open : 100;
  const [open, setOpen] = useState(false);
  const {
    children,
    classes,
    label,
    placement = "top",
    size = "md",
    color = "primary",
    baseVariant = "default",
  } = {
    ...TooltipVariants?.[variant],
    ...theme?.Tooltip?.[variant],
    ...props,
  };
  const baseClasses =
    TooltipVariants?.[variant]?.classes ??
    TooltipVariants?.[baseVariant]?.classes;

  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context,
    middlewareData,
    placement: actualPlacement,
  } = useFloating({
    placement,
    open,
    onOpenChange(open) {
      setOpen(open);
      if (open) {
        setCurrentId(label);
      }
    },
    middleware: [
      offset(5),
      flip(),
      shift({ padding: 8 }),
      arrow({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { delay: delayMs, restMs: 100 }),
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

  const arrowPosition = useArrowPlacement(
    actualPlacement,
    middlewareData.arrow
  );

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref, ...children.props }))}
      <LazyMotion features={loadFeatures}>
        <AnimatePresence>
          {open && (
            <m.div
              className={tw(baseClasses?.root, classes?.root, color)}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={
                // When in "grouped phase", make the transition faster
                delayMs === 1
                  ? { duration: 0.1 }
                  : { type: "spring", damping: 20, stiffness: 300 }
              }
              ref={floating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
              }}
              {...getFloatingProps()}
            >
              {label}
              <div
                ref={arrowRef}
                className={tw(baseClasses?.arrow, classes?.arrow, color)}
                style={arrowPosition}
              ></div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  );
};
