import { Coords } from "@floating-ui/react-dom";
import { useMemo } from "react";

const OFFSET = -3;

export const useArrowPlacement = (
  actualPlacement: string,
  arrowCoords?: Partial<Coords> & { centerOffset: number }
) => {
  const arrowPosition = useMemo(() => {
    const basePlacement = actualPlacement.split("-")[0];
    const staticSide =
      {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
      }[basePlacement] ?? "bottom";

    if (staticSide === "bottom" || staticSide === "top") {
      return {
        left: arrowCoords?.x ?? OFFSET,
        [staticSide]: arrowCoords?.y ?? OFFSET,
      };
    } else {
      return {
        [staticSide]: arrowCoords?.x ?? OFFSET,
        top: arrowCoords?.y ?? OFFSET,
      };
    }
  }, [arrowCoords, actualPlacement]);

  return arrowPosition;
};
