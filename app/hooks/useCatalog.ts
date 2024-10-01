import breakpoints from "@breakpoints.module.scss";
import generateStyleForGrid from "@lib/utils/generateStyleForGrid";
import { Dimension } from "@ui/Catalog/interfaces";
import { useWindowSize } from "@uidotdev/usehooks";

export default function useCatalog(dimensions: Dimension) {
  const { width } = useWindowSize();

  const dimensionsObj = dimensions ? Object.entries(dimensions) : null;

  const currBreakpoint =
    dimensionsObj &&
    dimensionsObj.reduce((prev, curr) => {
      const currIndex = curr[0] as unknown as keyof typeof breakpoints;
      const prevIndex = prev[0] as unknown as keyof typeof breakpoints;
      const currBreakpointWidth = Number(breakpoints[currIndex].slice(0, -2));
      const prevBreakpointWidth = Number(breakpoints[prevIndex].slice(0, -2));

      if (
        width &&
        width >= currBreakpointWidth &&
        currBreakpointWidth >= prevBreakpointWidth
      )
        return curr;

      return prev;
    }, dimensionsObj[0]);

  const currStyles = currBreakpoint?.[1];

  const gridStyle = currStyles && generateStyleForGrid(currStyles);

  return { currStyles, gridStyle };
}