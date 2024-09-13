import { ImgHTMLAttributes } from "react";

type defImageProps = ImgHTMLAttributes<HTMLImageElement>;
type ImageProps = Pick<defImageProps, "src" | "alt">;

type RequiredImageProps = Required<ImageProps> &
  Pick<defImageProps, "className">;

export interface CircledIconProps extends RequiredImageProps {
  color?: string;
  onClick?: () => void;
  imgClassName?: string;
  borderColor?: string;
}
