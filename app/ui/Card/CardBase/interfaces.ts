import { PropsWithChildren, RefObject } from "react";

export interface CardBaseProps extends PropsWithChildren{
    containerClassName?:string;
    ref?:RefObject<HTMLDivElement>|null 
}