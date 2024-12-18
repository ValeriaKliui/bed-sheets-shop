import { MutableRefObject } from "react";

export default function getOneOfMultipleRefs<T extends { name: string }>(
  node: T,
  refs: MutableRefObject<Map<string, T> | null>
) {
  const getMap = (refs: MutableRefObject<Map<string, T> | null>) => {
    if (!refs.current) {
      refs.current = new Map();
    }
    return refs.current;
  };

  const map = getMap(refs);
  map.set(node?.name, node);

  return () => {
    map.delete(node?.name);
  };
}
