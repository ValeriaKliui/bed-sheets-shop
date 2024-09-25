"use client";

import breakpoints from "@breakpoints.module.scss";
// import { useWindowSize } from "@uidotdev/usehooks";

import { CATALOGDFDProps } from "./interaces";

export default function CATALOGDFD({ cardItems, dimensions }: CATALOGDFDProps) {
  // const { width } = useWindowSize();

  // const currentBreakpoint = dimensions
  //   ? Object.entries(dimensions).map((dimension) => {
  //       const breakpoint = dimension[0];
  //       const existingBreakpoint = breakpoints[breakpoint].slice(0, -2);

  //       console.log(existingBreakpoint);
  //       return breakpoint;
  //     })
  //   : null;
  // console.log(currentBreakpoint);

  // const currentBreakpoint = dimensions
  //   ? Object.entries(dimensions).reduce(
  //       (prev, curr) => {
  //         const currNum = Number(breakpoints[curr[0]].slice(0, -2));
  //         const prevNum = Number(breakpoints[prev[0]].slice(0, -2));

  //         console.log(currNum, prevNum, curr);
  //         return curr;
  //       },
  //       ["xs"]
  //     )
  //   : null;

  // console.log(currentBreakpoint);

  return <div>{cardItems}</div>;
}
