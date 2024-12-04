"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { PortalProps } from "./interfaces";

export default function Portal({ children, selector }: PortalProps) {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(`#${selector}`);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current!) : null;
}
