import Link from "next/link";
import { IconProps } from "../interfaces";

export default function Logo({ fill, opacity }: IconProps) {
  return (
    <Link href="/">
      <svg
        width="103"
        height="18"
        viewBox="0 0 103 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        opacity={opacity}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M97.7849 0.332845V7.7848L87.7272 0.478379C87.582 0.374349 87.4799 0.332845 87.3347 0.332845C87.1706 0.332845 86.9434 0.436737 86.9434 0.748693V16.9687H92.1585V9.76925L102.218 16.8439C102.341 16.927 102.465 16.9687 102.589 16.9687C102.814 16.9687 103 16.8439 103 16.5527V0.332845H97.7849ZM18.6747 0.332845C18.5305 0.332845 18.4273 0.395236 18.3449 0.478379L9.52289 8.50515L0.700855 0.478379C0.597737 0.395236 0.515323 0.332845 0.371065 0.332845C0.185533 0.332845 0 0.457625 0 0.748693V16.9687H5.21492V10.9431L9.52289 14.8475L13.8103 10.9635V16.9687H19.0252V0.748693C19.0252 0.436737 18.8397 0.332845 18.6747 0.332845ZM34.2516 8.62979C34.2516 6.36323 32.7058 4.76208 30.4589 4.76208C28.2123 4.76208 26.6663 6.36323 26.6663 8.62979C26.6663 10.8965 28.2123 12.5393 30.4589 12.5393C32.7058 12.5393 34.2516 10.8965 34.2516 8.62979ZM39.5902 8.62979C39.5902 13.7246 35.9418 17.3014 30.4589 17.3014C24.9966 17.3014 21.3277 13.7246 21.3277 8.62979C21.3277 3.53514 24.9966 0 30.4589 0C35.9418 0 39.5902 3.53514 39.5902 8.62979ZM47.087 0.332845H41.8927V16.9687H54.4044V12.0819H47.087V0.332845ZM61.2553 0.332845H56.0608V16.9687H68.5731V12.0819H61.2553V0.332845ZM75.5964 12.0819H84.1094V16.9687H70.3813V0.332845H84.0072V4.80358H75.5964V6.67518H83.0795V10.1688H75.5964V12.0819Z"
          fill={fill}
        />
      </svg>
    </Link>
  );
}
