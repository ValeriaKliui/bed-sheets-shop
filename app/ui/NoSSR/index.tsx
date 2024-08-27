import PropTypes from "prop-types";
import { useEffect, useLayoutEffect, useState } from "react";

import { NoSSRProps } from "./interfaces";

const useEnhancedEffect =
  typeof window !== "undefined" && process.env.NODE_ENV !== "test"
    ? useLayoutEffect
    : useEffect;

const NoSSR = ({ children, defer, fallback }: NoSSRProps) => {
  const [isMounted, setMountedState] = useState(false);

  useEnhancedEffect(() => {
    if (!defer) setMountedState(true);
  }, [defer]);

  useEffect(() => {
    if (defer) setMountedState(true);
  }, [defer]);

  return isMounted ? children : fallback;
};

export default NoSSR;
