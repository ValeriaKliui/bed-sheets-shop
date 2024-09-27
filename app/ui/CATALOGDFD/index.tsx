"use client";

import breakpoints from "@breakpoints.module.scss";
import { useWindowSize } from "@uidotdev/usehooks";

import { CATALOGDFDProps } from "./interaces";

export default function CATALOGDFD({ cardItems, dimensions }: CATALOGDFDProps) {
  const { width } = useWindowSize();

  const currentBreakpoint = dimensions;

  return <div>{cardItems}</div>;
}
