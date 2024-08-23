import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

export type ChildrenElement =
  | ReactElement<any, string | JSXElementConstructor<any>>
  | Iterable<ReactNode>
  | ReactPortal;

export interface InfoPicBlockProps {
  children: [ChildrenElement, ChildrenElement];
}
