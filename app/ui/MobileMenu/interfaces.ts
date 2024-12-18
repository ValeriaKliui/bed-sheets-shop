import { MobileHeaderProps } from "@ui/MobileHeader/interfaces";

export interface MobileMenuProps
  extends Pick<MobileHeaderProps, "isOpened" | "toggleMenu"> {}
